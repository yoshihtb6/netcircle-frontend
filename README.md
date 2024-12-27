# netcircle-frontend環境構築

## 技術スタック
言語：Typescript

JSライブラリ：React

JS実行環境：node.js

パッケージマネージャー：npm

状態管理ライブラリ：[jotai](https://jotai.org)

ビルドツール：vite

CSS：[tailwindcss](https://tailwindcss.com)

UIライブラリ：[shadcn](https://ui.shadcn.com)

HTTPライブラリ：[axios](https://axios-http.com/docs/intro)

トースト：[react-hot-toast](https://react-hot-toast.com)

## Windows開発環境
1. WSL2とDockerを導入する

    [WSL2とDockerの導入](https://www.kagoya.jp/howto/cloud/container/wsl2_docker/)

2. gitのインストールと設定

   あらかじめgitHubのアカウント開設をお願いします。
  
    [gitインストール](https://learn.microsoft.com/ja-jp/windows/wsl/tutorials/wsl-git)

   ※Git Credential Manager のセットアップ以下は必要ないです。

   [githubの設定](https://zenn.dev/claustra01/articles/d5b31d0ffa0eb2#github%E3%81%A8%E3%81%AEssh%E6%8E%A5%E7%B6%9A)

3. vsCodeのインストール

   [vsCode](https://code.visualstudio.com/download)

4. gitでソースコードのclone

   Ubuntu上で任意の作業ディレクトリを作成し、移動する。
   2で設定ができていれば下記コマンドを実行する。
   
   `$ git clone git@github.com:yoshihtb6/netcircle-frontend.git`

5. nodejsとyarnのインストール

   [WSL2にNode.jsとYarnを導入する](https://zenn.dev/ryuu/articles/wsl2-addyarn)

6. dockerコンテナの立ち上げ

   プロジェクトルートディレクトリ(/netcircle-frontend/)に移動して下記コマンドを実行する。
   
   初回↓
   `$ docker compose up -d --build `

   2回目以降
   `$ docker compose up -d`

   ブラウザに`localhost:3000`と入力する。

以上です。

## 開発メモ
### エラーなどの解決策

・shascn

下記のようなエラーが出た場合

Something went wrong. Please check the error below for more details.
If the problem persists, please open an issue on GitHub.

ENOENT: no such file or directory, open '/home/netcircle/netcircle-frontend/app/tailwind.config.js'

→/appディレクトリ下のtailwind.config.cjsにシンボリックリンクを設定する
`$ ln -s tailwind.config.cjs tailwind.config.js `