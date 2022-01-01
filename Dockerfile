FROM codercom/code-server:latest
WORKDIR /app

RUN /usr/bin/code-server \
  --install-extension ms-python.python \
  --install-extension ms-ceintl.vscode-language-pack-ja

CMD ["--auth", "none", "/app"]
