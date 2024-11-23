# Node.jsベースのイメージを使用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# 必要なファイルをコピー
COPY ./app/package.json ./app/package-lock.json* ./app/yarn.lock* ./

# 依存関係をインストール
RUN yarn install

# ソースコードをコピー
COPY ./app .

# Viteサーバーを起動
CMD ["yarn", "run", "dev", "--", "--host"]