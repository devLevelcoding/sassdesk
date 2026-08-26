<?php
/**
 * SassDesk contact form handler — sends via Brevo API (no SMTP, no libraries).
 * POST fields: name, email, subject, message
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ── Config — loaded from .env or hardcoded fallback ──────────────────────────
$env_file = __DIR__ . '/.env';
$cfg = [];
if (file_exists($env_file)) {
    foreach (file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        [$k, $v] = array_map('trim', explode('=', $line, 2));
        $cfg[$k] = $v;
    }
}

$BREVO_API_KEY      = $cfg['BREVO_API_KEY']      ?? '';
$FROM_EMAIL         = $cfg['FROM_EMAIL']         ?? 'hello@sassdesk.com';
$FROM_NAME          = $cfg['FROM_NAME']          ?? 'SassDesk';
$CONTACT_TO         = $cfg['CONTACT_TO']         ?? 'pirvan.marian@gmail.com';
$SLACK_WEBHOOK_URL  = $cfg['SLACK_WEBHOOK_URL']  ?? '';

// ── Validate input ───────────────────────────────────────────────────────────
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$subject = trim($_POST['subject'] ?? 'General question');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

$name    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$email   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// ── Build email HTML ─────────────────────────────────────────────────────────
$html = <<<HTML
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0B1520;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
  <div style="max-width:520px;margin:32px auto;background:#111F2E;border:1px solid #1E3045;border-radius:10px;overflow:hidden">
    <div style="background:#0D9488;padding:20px 28px">
      <span style="font-size:18px;font-weight:800;color:#fff">SassDesk</span>
      <span style="color:rgba(255,255,255,.6);font-size:13px;margin-left:8px">Contact Form</span>
    </div>
    <div style="padding:28px">
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
        <tr>
          <td style="padding:6px 0;color:#6B8BA4;font-size:13px;width:90px">From</td>
          <td style="padding:6px 0;color:#E2EBF4;font-size:14px;font-weight:600">$name &lt;$email&gt;</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#6B8BA4;font-size:13px">Subject</td>
          <td style="padding:6px 0;color:#E2EBF4;font-size:14px">$subject</td>
        </tr>
      </table>
      <div style="background:#0B1520;border:1px solid #1E3045;border-radius:8px;padding:16px">
        <p style="color:#E2EBF4;font-size:14px;line-height:1.65;margin:0">{$message}</p>
      </div>
      <p style="margin:20px 0 0;color:#3A526A;font-size:12px">
        Reply directly to this email to respond to $name.
      </p>
    </div>
  </div>
</body>
</html>
HTML;

// ── Post to Slack as a standing backup — always runs, independent of whether
// the Brevo email below succeeds, so a submission is never silently lost. ────
if ($SLACK_WEBHOOK_URL) {
    $slack_text = ":envelope: *New contact form submission*\n"
        . "*From:* $name <$email>\n"
        . "*Subject:* $subject\n"
        . "*Message:*\n$message";
    $slack_ch = curl_init($SLACK_WEBHOOK_URL);
    curl_setopt_array($slack_ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode(['text' => $slack_text]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    ]);
    curl_exec($slack_ch);
    curl_close($slack_ch);
}

// ── Send via Brevo API ───────────────────────────────────────────────────────
$payload = json_encode([
    'sender'      => ['name' => $FROM_NAME, 'email' => $FROM_EMAIL],
    'replyTo'     => ['name' => $name, 'email' => $email],
    'to'          => [['email' => $CONTACT_TO]],
    'subject'     => "[$subject] Message from $name — SassDesk",
    'htmlContent' => $html,
]);

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Accept: application/json',
        'api-key: ' . $BREVO_API_KEY,
    ],
]);
$response   = curl_exec($ch);
$http_code  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error = curl_error($ch);
curl_close($ch);

if ($curl_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Connection error', 'detail' => $curl_error]);
    exit;
}

if ($http_code === 201) {
    echo json_encode(['success' => true]);
} else {
    $detail = json_decode($response, true);
    http_response_code(500);
    echo json_encode([
        'error'  => 'Email delivery failed',
        'code'   => $http_code,
        'detail' => $detail['message'] ?? $response,
    ]);
}
