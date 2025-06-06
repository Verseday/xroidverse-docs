---
sidebar_position: 1
title: キャラクター追加ガイド
description: MetaHumanを使用してXroidVerseプロジェクトにキャラクターを追加する詳細手順
keywords: [MetaHuman, キャラクター追加, Quixel Bridge, ブループリント設定]
---

# キャラクター追加ガイド

このドキュメントでは、MetaHumanを使用してXroidVerseプロジェクトにキャラクターを追加する手順について説明します。

:::info 所要時間
このチュートリアルの完了には約30-45分かかります。
:::

## 前提条件

:::warning 必要な準備
- Epic Games アカウント
- Unreal Engine エディターでプロジェクトが開いている状態
- インターネット接続
:::

## 📋 手順概要

1. **MetaHumanの作成** - MetaHuman Creatorでキャラクター作成
2. **Quixel Bridgeでのインポート** - プロジェクトへの追加
3. **ブループリント設定** - ゲーム内で使用可能にする設定
4. **レベル配置** - レベル内への配置と最終設定

---

## 🎨 Step 1: MetaHumanの作成

### 1.1 MetaHuman Creatorへのアクセス

[MetaHuman Creator](https://metahuman.unrealengine.com/)にアクセスしてキャラクターを作成します。

Epic Games アカウントでサインインし、希望するキャラクターの外見を設定してください。



---

## 📥 Step 2: Quixel Bridgeでのインポート

### 2.1 Quixel Bridgeの起動

Unreal Engine エディターから Quixel Bridge を起動します。

![Quixel Bridge起動](/img/docs/character-setup/01-quixel-bridge-launch.png)

画像のメニューから出すか、エディターのメニューバーの **Window** → **Quixel Bridge** からアクセスできます。

### 2.2 STAY HEREオプションの選択

Quixel Bridgeが起動すると、Megascansの移行に関する通知が表示される場合があります。

![STAY HEREオプション](/img/docs/character-setup/02-stay-here-option.png)

**STAY HERE** ボタンを押して、現在のQuixel Bridgeを使用し続けます。

### 2.3 アカウントサインイン

右上のプロフィールアイコンから **Sign In** を選択します。

![サインインオプション](/img/docs/character-setup/03-sign-in-option.png)

MetaHuman Creator で使用したものと同じEpic Games アカウントでサインインしてください。

### 2.4 MetaHumanタブへの切り替え

左側のナビゲーションパネルから **METAHUMANS** タブを選択し、**My MetaHumans** セクションに切り替えます。

![MetaHumanタブ](/img/docs/character-setup/04-metahuman-tab.png)

### 2.5 キャラクターの選択とプロジェクトへの追加

作成したキャラクターが表示されるので、以下の手順で追加します：

![キャラクター選択とクオリティ設定](/img/docs/character-setup/06-character-selection-quality.png)

1. 追加したいキャラクターを選択
2. Quality設定を選択（Low Quality、Medium Quality、Highest Quality から選択可能）
3. 右下の **Add** ボタンを押してプロジェクトに追加

:::note Quality設定について
- **Highest Quality**: 最高品質だが、ファイルサイズが大きい
- **Medium Quality**: バランスの取れた品質とサイズ
- **Low Quality**: 軽量だが、品質は劣る
:::

### 2.6 インポート処理の完了

画面右下にインポート進行状況の通知が表示されます。

![インポート通知](/img/docs/character-setup/05-import-notification.png)

この表示が出たら、**Don't import** ボタンを押してください。



---

## 🔧 Step 3: ブループリントの設定

インポートが完了したら、キャラクターをプロジェクトで使用できるように設定する必要があります。

### 3.1 インポートされたキャラクターの確認

インポートした MetaHuman は、Content Browser 内の `/All/Content/MetaHumans` にキャラクターの名前で追加されます。

![インポートされたMetaHumanの場所](/img/docs/character-setup/07-imported-metahuman-location.png)

### 3.2 既存ブループリントのコピー

`/All/Content/MetaHumans/RoidM/BP_RTG_Manequinn_RoidM` を `/All/Content/MetaHumans/自分のキャラ名` の場所にコピーします。

![ブループリントのコピー](/img/docs/character-setup/08-copy-blueprint.png)

### 3.3 ブループリントの編集開始

`/All/Content/MetaHumans/自分のキャラ名/BP_RTG_Manequinn_RoidM` をダブルクリックで開きます。

### 3.4 既存コンポーネントの削除

左の Components パネルから `Mesh (CharacterMesh0)` の子についている `Body` ～ `Beard` を全て削除します。

![既存コンポーネントの削除](/img/docs/character-setup/09-delete-components.png)

:::tip 操作手順
1. `Body` をクリック
2. `Beard` を **Shift** を押しながらクリックして `Body` ～ `Beard` を全て選択
3. **Delete** キーを押して削除
:::

### 3.5 新しいキャラクターコンポーネントのコピー

`BP_RTG_Manequinn_RoidM` のタブを開いたまま、Content Browser から `/All/Content/MetaHumans/自分のキャラ名/BP_自分のキャラ名` をダブルクリックで開きます。

左の Components パネルから `Body` ～ `Beard` を全て選択し、**Ctrl + C** でコピーします。

![新しいコンポーネントのコピー](/img/docs/character-setup/10-copy-new-components.png)

:::tip 操作手順
1. `Body` をクリック
2. `Beard` を **Shift** を押しながらクリック
3. **Ctrl + C** でコピー
:::

### 3.6 コンポーネントの貼り付け

`BP_RTG_Manequinn_RoidM` のタブに切り替えて、Components パネルのどこでもいいからクリックしてから **Ctrl + V** で貼りつけます。

![コンポーネントの貼り付け](/img/docs/character-setup/11-paste-components.png)

### 3.7 Bodyコンポーネントの配置

**Bodyのみを選択している状態で** Body をドラッグ & ドロップで、`Mesh (CharacterMesh0)` の子にします。

![Bodyコンポーネントのドラッグ](/img/docs/character-setup/12-drag-body-component.png)

![MeshコンポーネントにBodyを配置](/img/docs/character-setup/13-body-under-mesh.png)

---

## ⚙️ Step 4: 関数とスクリプトの設定

### 4.1 Set Facial Expression関数の編集

左下の My Blueprint パネルから、**FUNCTIONS** セクション内の **Set Facial Expression** をダブルクリックして開きます。

![Set Facial Expression関数を開く](/img/docs/character-setup/14-set-facial-expression.png)

### 4.2 Faceコンポーネントの接続

**Get Anim Instance** という緑のノードの左の「Target」という青色のピンの上に、Components パネル内の **Face** をドラッグ & ドロップで追加します。

![Get Anim Instanceノード](/img/docs/character-setup/15-get-anim-instance.png)

![Faceコンポーネントの接続](/img/docs/character-setup/16-face-target-connection.png)

### 4.3 ConstructionScriptの設定

同様に、**FUNCTIONS** セクション内で **ConstructionScript** をダブルクリックして開き、Skeletal Mesh Component ピンに「Feet」「Legs」「Torso」をドラッグ&ドロップで接続します。

![ConstructionScriptの接続](/img/docs/character-setup/17-construction-script-connections.png)

### 4.4 EnableMasterPoseの設定

同様に、**FUNCTIONS** セクション内で **EnableMasterPose** をダブルクリックして開き、Set Leader Pose Component の New Leader Bone Component ピンに「Body」をドラッグ＆ドロップで接続します。

![EnableMasterPoseの接続](/img/docs/character-setup/19-enable-master-pose-connection.png)

---

## 🎯 Step 5: コンポーネント詳細設定

### 5.1 Bodyコンポーネントの詳細設定

Body をクリックして右の Details パネルで次の設定を行います：

#### Transform設定のリセット
Transform セクション内の Location, Rotation の右の元に戻す矢印を押して 0,0,0 にリセットします。

![Transform設定のリセット](/img/docs/character-setup/18-transform-reset.png)

#### Animation Class設定
Animation セクション内の Anim Class に **ABM_MHRuntimeRTG** を設定します。

![Animation Class設定](/img/docs/character-setup/19-anim-class-setting.png)

#### Skeletal Mesh Asset設定
Mesh セクション内の Skeletal Mesh Asset に、元の `BP_自分のキャラ名` についていた Skeletal Mesh Asset と同じものを設定します。

![Skeletal Mesh Assetのコピー](/img/docs/character-setup/21-skeletal-mesh-copy.png)

:::tip コピー&ペーストの活用
右クリックするとコピー、ペーストができるのでこれを活用してください。
:::

![Skeletal Mesh Assetのペースト](/img/docs/character-setup/22-skeletal-mesh-paste.png)

### 5.2 その他のコンポーネント設定

Torso, Legs, Feet, Face の Mesh セクション内の Skeletal Mesh Asset についても同様に、元の `BP_自分のキャラ名` についていたものと同じものを設定します。

### 5.3 Faceコンポーネントの設定

Face をクリックして次の設定を行います：

Animation セクション内の Anim Class に **Face_LipSync_AnimBP** を設定します。

![Face Animation Class設定](/img/docs/character-setup/20-face-anim-class.png)

### 5.4 設定完了の確認

これでキャラクターの設定は完了です。Viewport タブを見たときに、キャラクターが適切に表示されていればうまくいっています。

![最終的なキャラクター表示](/img/docs/character-setup/23-final-character-view.png)

### 5.5 ブループリントのリネーム

Content Browser で、`/All/Content/MetaHumans/自分のキャラ名/BP_RTG_Manequinn_RoidM` を選択して、**F2** キーを押して名前を「**BP_RTG_Manequinn_自分のキャラ名**」に変更します。

![ブループリントのリネーム](/img/docs/character-setup/24-blueprint-rename.png)

---

## 🎮 Step 6: レベルへの配置と設定

### 6.1 レベルへの配置

リネームしたブループリントをレベル内の好きな場所にドラッグ&ドロップで配置します。

### 6.2 キャラクターの操作設定

キャラクターをAIに操作させるか、人間に操作させるかによって設定方法が異なります。

<details>
<summary>AIに操作させる場合</summary>

#### タグ設定

配置後、そのキャラクターを選択している状態で、Details パネル内で「**tags**」で検索し、**Actor セクション内の** Tags の右の **＋** ボタンを押して、**Person_番号** という形式で番号を付けます。

![AIキャラクターのタグ設定](/img/docs/character-setup/26-character-tags-setting.png)

例：
- `Person_0`
- `Person_1`
- `Person_2`
- ...

:::warning 重要
ここで付けた番号と、JSON内の Person キーの番号が対応します。
:::

</details>

<details>
<summary>人間に操作させる場合</summary>

#### LevelInfo設定

Outliner で **A_LevelInfo** を検索してクリックして選択状態にし、Details パネルの **Default** セクション内の **User Input Lip Sync Character** に先ほど配置したキャラクターを設定します。

![人間操作キャラクターの設定](/img/docs/character-setup/26-human-control-setting.png)

</details>

---

## ✅ 設定完了

:::success 完了！
これでMetaHumanキャラクターの追加と設定が完了しました。キャラクターがレベル内に正しく配置され、適切なタグが設定されていれば、プロジェクト内で使用できる状態になります。
:::



## 📚 関連ドキュメント

- [表情設定ガイド](../expression-setup/facial-expression-guide)
- [モーション設定ガイド](../motion-setup/animation-guide) 