# APTI MVP サイト

## プロジェクト概要

**Advertisers and Publishers Transparency Initiative (APTI)** は、  
広告主とパブリッシャーが共に**支えあい**、  
透明で健全な広告サプライチェーンを実現するための一般社団法人です。

このリポジトリでは、APTI公式サイト（[https://apti.jp](https://apti.jp)）の  
**MVP版サイト**を構築・管理します。

---

## サイトの特徴

- ✅ **日英両対応**: ブラウザ言語に応じた自動切り替え
- ✅ **レスポンシブデザイン**: PC・タブレット・モバイル対応
- ✅ **AWS S3 + CloudFront**: 静的ホスティング + CDN配信
- ✅ **GitHub Actions**: 自動デプロイメント
- ✅ **設立趣意書**: 日英版準備中

---

## ディレクトリ構成

```
apti.jp/
├── index.html              # 日本語トップページ
├── about.html              # 日本語設立趣意書
├── join.html               # 日本語参加フォーム
├── news.html               # 日本語お知らせ
├── standards-tools.html    # 日本語規格とツール
├── en/                     # 英語版ディレクトリ
│   ├── index.html          # English top page
│   ├── about.html          # English mission statement
│   ├── join.html           # English join form
│   ├── news.html           # English news
│   └── standards-tools.html # English Standards & Tools
├── assets/
│   ├── css/
│   │   └── style.css       # 共通スタイル（多言語対応）
│   ├── img/
│   │   └── logo.png        # APTIロゴ
│   └── js/
│       └── main.js         # 言語切り替え・ブラウザ検出
├── .github/
│   └── workflows/
│       └── deploy.yml      # AWS S3自動デプロイ
└── favicon.ico
```
---

## 多言語対応

### 言語切り替え機能
- **ブラウザ言語検出**: 初回訪問時に自動判定
- **手動切り替え**: ヘッダーのドロップダウンで切り替え可能
- **URL構造**:
  - 日本語: `https://apti.jp/`
  - 英語: `https://apti.jp/en/`

### サポート言語
- 🇯🇵 **日本語** (ja): デフォルト言語
- 🇺🇸 **English** (en): 完全翻訳済み

---

## ページ構成

### **1. トップページ**
- **日本語**: キャッチコピー「広告主とパブリッシャーが支えあう、透明で健全な広告エコシステムを。」
- **English**: "Transparent and Healthy Advertising Ecosystem for Advertisers and Publishers"
- CTAボタン（設立趣意書・参加フォーム）
- 最新ニュース表示エリア

### **2. 設立趣意書 / Mission Statement**
- 設立の背景・目的
- 活動の3本柱（情報共有・相互支援・信頼醸成）
- 活動スタンス・参加意義
- 発起人一覧（準備中）

### **3. 参加・賛同フォーム / Join Us**
- 参加メリットの説明
- Googleフォーム埋め込み予定
- 連絡先情報

### **4. お知らせ / News**
- イベント告知
- 活動レポート
- 技術トピック共有

### **5. 規格とツール / Standards & Tools**
- IAB Tech Lab規約の日本語翻訳
- 透明性推進のためのオープンソースツール
  - AdsTxt Inspector: ads.txt検証・可視化ツール
  - AdsTxt Manager: ads.txt/app-ads.txt/sellers.json一元管理プラットフォーム

---

## インフラ構成

### AWS設定
- **S3バケット**: `apti.jp` (静的ホスティング)
- **CloudFront**: CDN配信 + HTTPS化
- **Route53**: DNSレコード管理
- **ACM**: SSL/TLS証明書

### 自動デプロイ
- **GitHub Actions**: mainブランチへのpush時に自動実行
- **S3同期**: ファイル変更の自動反映
- **CloudFrontキャッシュ**: 無効化処理

---

## デザインガイドライン

### コンセプト
「**透明性**」「**信頼**」「**支えあい**」をビジュアルで表現

### カラーパレット
- **メインカラー**: ネイビーブルー `#1E3A8A`
- **アクセント**: ライトグリーン `#10B981`
- **ベース**: ホワイト `#FFFFFF`
- **テキスト**: `#333333`

### タイポグラフィ
- **日本語**: [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
- **英語**: Roboto
- **ウェイト**: 300, 400, 500, 700

### レイアウト
- **モバイルファースト**: レスポンシブデザイン
- **ヒーローセクション**: インパクトのあるキャッチコピー
- **CTAボタン**: 視認性重視の配置
- **ナビゲーション**: スティッキーヘッダー + 言語切り替え

---

## 開発者向け情報

### 必要な環境変数（GitHub Secrets）
```
AWS_ACCESS_KEY_ID           # AWS アクセスキー
AWS_SECRET_ACCESS_KEY       # AWS シークレットキー  
S3_BUCKET_NAME              # S3 バケット名（apti.jp）
CLOUDFRONT_DISTRIBUTION_ID  # CloudFront ディストリビューション ID（キャッシュ無効化のため）
```

### ローカル開発
```bash
# HTTPサーバーを起動（Python使用例）
python3 -m http.server 8000

# ブラウザでアクセス
open http://localhost:8000
```

### デプロイ方法
1. `main`ブランチにpush
2. GitHub Actionsが自動実行
3. S3にファイル同期
4. CloudFrontキャッシュを無効化

---

## サイトURL

- **本番環境**: https://apti.jp
- **日本語版**: https://apti.jp/
- **English**: https://apti.jp/en/

---
