from flask import Flask, render_template
import ssl

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ssl_context.load_cert_chain('../secrets/certificate.crt', '../secrets/private.key')
    app.run(ssl_context=ssl_context, host="0.0.0.0")
