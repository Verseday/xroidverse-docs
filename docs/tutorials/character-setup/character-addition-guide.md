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

:::note バージョンの選択
ご利用のUnreal Engineバージョンに合わせて、以下のトグルから手順を選択してください。
:::

<details>
<summary>UE5.6以上</summary>

## 🎨 Step 1: MetaHumanの作成（準備中）

このセクションは準備中です。MetaHuman Creatorでの作成手順は後日追記します。

---

## 🧩 Step 2: セットアップ（UE5.6+）

### 2.1 MetaHuman Character を開く
コンテンツブラウザから、作成済みの MetaHuman Character をダブルクリックで開きます。

### 2.2 Download Texture Source を実行
- エディター上部の「Download Texture Source」をクリック
- 好みの解像度でダウンロード（8K推奨）

![Download Texture Source](/img/docs/character-setup/UE5.6+/1-download-texture-source.png)

### 2.3 Create Full Rig を実行
上部の「Create Full Rig」ボタンを押します。

![Create Full Rig](/img/docs/character-setup/UE5.6+/2-create-full-rig.png)

### 2.4 Assembly タブで出力先を設定して Assemble
Assembly タブに切り替え、以下を設定して「Assemble」を押します。

- Assembly: `UE Cine (Complete)`
- Root Directory: `/Game/MetaHumans`
- Name: このメタヒューマンのキャラ名

![Assembly 設定](/img/docs/character-setup/UE5.6+/3-assembly-settings.png)

#### 補足
次の確認ダイアログが表示された場合は「OK」を押してください。

![確認ダイアログ](/img/docs/character-setup/UE5.6+/4-assembly-overwrite-warning.png)

### 2.5 ブループリントを複製して命名
- Content Browser で `/All/Content/MetaHumans/自分のキャラ名/BP_自分のキャラ名` を右クリックし、Duplicate を選択
- 生成された複製の名前を「`BP_RTG_Manequinn_自分のキャラ名`」に変更

![Duplicate 操作](/img/docs/character-setup/UE5.6+/5-duplicate-blueprint.png)
![Duplicate 結果](/img/docs/character-setup/UE5.6+/6-duplicate-result.png)

### 2.6 Unreal を閉じて全保存
- Unreal Editor を一度終了します。
- 終了時に保存ダイアログが出たら、全て保存してください。

### 2.7 親クラスを CharacterBase に設定
- `BP_RTG_Manequinn_自分のキャラ名` を開く
- 画面上部の「Class Settings」をクリック
- Details の「Parent Class」を `CharacterBase` に設定

![Parent Class 設定](/img/docs/character-setup/UE5.6+/7-parent-class-characterbase.png)

### 2.8 ルート階層の調整
- Components パネルで `Root` を `Mesh (CharacterMesh0)` の子になるようにドラッグ&ドロップ

![ドラッグ前](/img/docs/character-setup/UE5.6+/8-drag-root-under-mesh-before.png)
![ドラッグ後](/img/docs/character-setup/UE5.6+/9-drag-root-under-mesh-after.png)

### 2.9 Mesh (CharacterMesh0) の設定
- Components で `Mesh (CharacterMesh0)` を選択
- 右側 Details の Transform → Location の Z を `-89` に設定

![Location 開いた状態](/img/docs/character-setup/UE5.6+/10-transform-z-open.png)
![Location Z=-89](/img/docs/character-setup/UE5.6+/11-transform-z--89.png)

- 同じく Transform → Rotation の Z を `270` に設定

![Rotation Z=270](/img/docs/character-setup/UE5.6+/21-rotation-z-270.png)

- Mesh カテゴリの「Skeletal Mesh Asset」に `SKM_Quinn_Simple` を設定

![Skeletal Mesh 検索](/img/docs/character-setup/UE5.6+/12-search-skm-quinn-simple.png)
![Skeletal Mesh 設定](/img/docs/character-setup/UE5.6+/13-set-skeletal-mesh-asset.png)

- Animation カテゴリの「Anim Class」に `ABP_Quinn` を設定
  - 設定後、自動的にサフィックス `_C` が付与されます（問題ありません）

![Anim Class 設定](/img/docs/character-setup/UE5.6+/14-set-anim-class-abp-quinn.png)

- Details の検索欄で「vis」と入力し、次を設定します：
  - Rendering カテゴリの **Visible** のチェックを外す
  - Optimization カテゴリの **Visibility Based Anim Tick Option** を「Always Tick Pose and Refresh Bones」に設定

![Visible と Tick Option 設定](/img/docs/character-setup/UE5.6+/22-visible-and-tick-option.png)

### 2.10 Body の Anim Class 設定
- Components パネルで `Body` を選択
- Animation カテゴリの「Anim Class」に `ABM_MHRuntimeRTG` を設定

![Body Anim Class 設定](/img/docs/character-setup/UE5.6+/16-body-anim-class-abm-mhruntimertg.png)

### 2.11 Face コンポーネントの設定
- `Face` をクリックして次の設定を行います：

- Animation セクション内の Anim Class に `Face_LipSync_AnimBP` を設定します。

![Face Animation Class設定](/img/docs/character-setup/UE5.6+/23-face-anim-class.png)

### 2.12 表情イベントのコピー
- 参照元キャラの `Event SetFacialExpression` グラフをコピーし、自分のキャラの `EventGraph` に貼り付け

![Event SetFacialExpression のコピー](/img/docs/character-setup/UE5.6+/18-copy-event-setfacialexpression.png)

### 2.13 表示確認
- 設定完了。`Viewport` タブでキャラクターが適切に表示されていれば成功です。

![最終表示](/img/docs/character-setup/UE5.6+/19-final-viewport.png)

:::tip 次のステップ
キャラクターのセットアップが完了しました。次は、下記の[「レベルへの配置と設定」](#レベルへの配置と設定)に進んでください。
:::

</details>

<details>
<summary>UE5.5以下</summary>

## 🎨 Step 1: MetaHumanの作成

### 1.1 MetaHuman Creatorへのアクセス

[MetaHuman Creator](https://metahuman.unrealengine.com/)にアクセスしてキャラクターを作成します。

Epic Games アカウントでサインインし、希望するキャラクターの外見を設定してください。



---

## 📥 Step 2: Quixel Bridgeでのインポート

### 2.1 Quixel Bridgeの起動

Unreal Engine エディターから Quixel Bridge を起動します。

![Quixel Bridge起動](/img/docs/character-setup/UE5.5-/01-quixel-bridge-launch.png)

画像のメニューから出すか、エディターのメニューバーの **Window** → **Quixel Bridge** からアクセスできます。

### 2.2 STAY HEREオプションの選択

Quixel Bridgeが起動すると、Megascansの移行に関する通知が表示される場合があります。

![STAY HEREオプション](/img/docs/character-setup/UE5.5-/02-stay-here-option.png)

**STAY HERE** ボタンを押して、現在のQuixel Bridgeを使用し続けます。

### 2.3 アカウントサインイン

右上のプロフィールアイコンから **Sign In** を選択します。

![サインインオプション](/img/docs/character-setup/UE5.5-/03-sign-in-option.png)

MetaHuman Creator で使用したものと同じEpic Games アカウントでサインインしてください。

### 2.4 MetaHumanタブへの切り替え

左側のナビゲーションパネルから **METAHUMANS** タブを選択し、**My MetaHumans** セクションに切り替えます。

![MetaHumanタブ](/img/docs/character-setup/UE5.5-/04-metahuman-tab.png)

### 2.5 キャラクターの選択とプロジェクトへの追加

作成したキャラクターが表示されるので、以下の手順で追加します：

![キャラクター選択とクオリティ設定](/img/docs/character-setup/UE5.5-/06-character-selection-quality.png)

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

![インポート通知](/img/docs/character-setup/UE5.5-/05-import-notification.png)

この表示が出たら、**Don't import** ボタンを押してください。



---

## 🔧 Step 3: ブループリントの設定

インポートが完了したら、キャラクターをプロジェクトで使用できるように設定する必要があります。

### 3.1 インポートされたキャラクターの確認

インポートした MetaHuman は、Content Browser 内の `/All/Content/MetaHumans` にキャラクターの名前で追加されます。

![インポートされたMetaHumanの場所](/img/docs/character-setup/UE5.5-/07-imported-metahuman-location.png)

### 3.2 既存ブループリントのコピー

`/All/Content/MetaHumans/RoidM/BP_RTG_Manequinn_RoidM` を `/All/Content/MetaHumans/自分のキャラ名` の場所にコピーします。

![ブループリントのコピー](/img/docs/character-setup/UE5.5-/08-copy-blueprint.png)

### 3.3 ブループリントの編集開始

`/All/Content/MetaHumans/自分のキャラ名/BP_RTG_Manequinn_RoidM` をダブルクリックで開きます。

### 3.4 既存コンポーネントの削除

左の Components パネルから `Mesh (CharacterMesh0)` の子についている `Body` ～ `Beard` を全て削除します。

![既存コンポーネントの削除](/img/docs/character-setup/UE5.5-/09-delete-components.png)

:::tip 操作手順
1. `Body` をクリック
2. `Beard` を **Shift** を押しながらクリックして `Body` ～ `Beard` を全て選択
3. **Delete** キーを押して削除
:::

### 3.5 新しいキャラクターコンポーネントのコピー

`BP_RTG_Manequinn_RoidM` のタブを開いたまま、Content Browser から `/All/Content/MetaHumans/自分のキャラ名/BP_自分のキャラ名` をダブルクリックで開きます。

左の Components パネルから `Body` ～ `Beard` を全て選択し、**Ctrl + C** でコピーします。

![新しいコンポーネントのコピー](/img/docs/character-setup/UE5.5-/10-copy-new-components.png)

:::tip 操作手順
1. `Body` をクリック
2. `Beard` を **Shift** を押しながらクリック
3. **Ctrl + C** でコピー
:::

### 3.6 コンポーネントの貼り付け

`BP_RTG_Manequinn_RoidM` のタブに切り替えて、Components パネルのどこでもいいからクリックしてから **Ctrl + V** で貼りつけます。

![コンポーネントの貼り付け](/img/docs/character-setup/UE5.5-/11-paste-components.png)

### 3.7 Bodyコンポーネントの配置

**Bodyのみを選択している状態で** Body をドラッグ & ドロップで、`Mesh (CharacterMesh0)` の子にします。

![Bodyコンポーネントのドラッグ](/img/docs/character-setup/UE5.5-/12-drag-body-component.png)

![MeshコンポーネントにBodyを配置](/img/docs/character-setup/UE5.5-/13-body-under-mesh.png)

---

## ⚙️ Step 4: 関数とスクリプトの設定

### 4.1 Set Facial Expression関数の編集

左下の My Blueprint パネルから、**FUNCTIONS** セクション内の **Set Facial Expression** をダブルクリックして開きます。

![Set Facial Expression関数を開く](/img/docs/character-setup/UE5.5-/14-set-facial-expression.png)

### 4.2 Faceコンポーネントの接続

**Get Anim Instance** という緑のノードの左の「Target」という青色のピンの上に、Components パネル内の **Face** をドラッグ & ドロップで追加します。

![Get Anim Instanceノード](/img/docs/character-setup/UE5.5-/15-get-anim-instance.png)

![Faceコンポーネントの接続](/img/docs/character-setup/UE5.5-/16-face-target-connection.png)

### 4.3 ConstructionScriptの設定

同様に、**FUNCTIONS** セクション内で **ConstructionScript** をダブルクリックして開き、Skeletal Mesh Component ピンに「Feet」「Legs」「Torso」をドラッグ&ドロップで接続します。

![ConstructionScriptの接続](/img/docs/character-setup/UE5.5-/17-construction-script-connections.png)

### 4.4 EnableMasterPoseの設定

同様に、**FUNCTIONS** セクション内で **EnableMasterPose** をダブルクリックして開き、Set Leader Pose Component の New Leader Bone Component ピンに「Body」をドラッグ＆ドロップで接続します。

![EnableMasterPoseの接続](/img/docs/character-setup/UE5.5-/19-enable-master-pose-connection.png)

---

## 🎯 Step 5: コンポーネント詳細設定

### 5.1 Bodyコンポーネントの詳細設定

Body をクリックして右の Details パネルで次の設定を行います：

#### Transform設定のリセット
Transform セクション内の Location, Rotation の右の元に戻す矢印を押して 0,0,0 にリセットします。

![Transform設定のリセット](/img/docs/character-setup/UE5.5-/18-transform-reset.png)

#### Animation Class設定
Animation セクション内の Anim Class に **ABM_MHRuntimeRTG** を設定します。

![Animation Class設定](/img/docs/character-setup/UE5.5-/19-anim-class-setting.png)

#### Skeletal Mesh Asset設定
Mesh セクション内の Skeletal Mesh Asset に、元の `BP_自分のキャラ名` についていた Skeletal Mesh Asset と同じものを設定します。

![Skeletal Mesh Assetのコピー](/img/docs/character-setup/UE5.5-/21-skeletal-mesh-copy.png)

:::tip コピー&ペーストの活用
右クリックするとコピー、ペーストができるのでこれを活用してください。
:::

![Skeletal Mesh Assetのペースト](/img/docs/character-setup/UE5.5-/22-skeletal-mesh-paste.png)

### 5.2 その他のコンポーネント設定

Torso, Legs, Feet, Face の Mesh セクション内の Skeletal Mesh Asset についても同様に、元の `BP_自分のキャラ名` についていたものと同じものを設定します。

### 5.3 Faceコンポーネントの設定

Face をクリックして次の設定を行います：

Animation セクション内の Anim Class に **Face_LipSync_AnimBP** を設定します。

![Face Animation Class設定](/img/docs/character-setup/UE5.5-/20-face-anim-class.png)

### 5.4 設定完了の確認

これでキャラクターの設定は完了です。Viewport タブを見たときに、キャラクターが適切に表示されていればうまくいっています。

![最終的なキャラクター表示](/img/docs/character-setup/UE5.5-/23-final-character-view.png)

### 5.5 ブループリントのリネーム

Content Browser で、`/All/Content/MetaHumans/自分のキャラ名/BP_RTG_Manequinn_RoidM` を選択して、**F2** キーを押して名前を「**BP_RTG_Manequinn_自分のキャラ名**」に変更します。

![ブループリントのリネーム](/img/docs/character-setup/UE5.5-/24-blueprint-rename.png)

:::tip 次のステップ
キャラクターのセットアップが完了しました。次は、下記の[「レベルへの配置と設定」](#レベルへの配置と設定)に進んでください。
:::

</details>

---

## 🎮 レベルへの配置と設定

:::note 全バージョン共通
このセクションは、UE5.6以上・UE5.5以下のどちらのバージョンでも共通の手順です。
:::

### レベルへの配置

リネームしたブループリントをレベル内の好きな場所にドラッグ&ドロップで配置します。

### キャラクターの操作設定

キャラクターをAIに操作させるか、人間に操作させるかによって設定方法が異なります。

<details>
<summary>AIに操作させる場合</summary>

#### タグ設定

配置後、そのキャラクターを選択している状態で、Details パネル内で「**tags**」で検索し、**Actor セクション内の** Tags の右の **＋** ボタンを押して、**Person_キャラクター名** という形式で名前を付けます。

![AIキャラクターのタグ設定](/img/docs/character-setup/UE5.5-/26-character-tags-setting.png)

例：
- `Person_Brian`
- `Person_Alina`
- `Person_キャラクター名`
- ...

:::warning 重要
ここで付けた名前と、JSON内の Person キーの文字列が対応します。
:::

</details>

<details>
<summary>人間に操作させる場合</summary>

#### LevelInfo設定

Outliner で **A_LevelInfo** を検索してクリックして選択状態にし、Details パネルの **Default** セクション内の **User Input Lip Sync Character** に先ほど配置したキャラクターを設定します。

![人間操作キャラクターの設定](/img/docs/character-setup/UE5.5-/26-human-control-setting.png)

</details>

---

## ✅ 設定完了

:::success 完了！
これでMetaHumanキャラクターの追加と設定が完了しました。キャラクターがレベル内に正しく配置され、適切なタグが設定されていれば、プロジェクト内で使用できる状態になります。
:::



## 📚 関連ドキュメント

- [表情設定ガイド](../expression-setup/facial-expression-guide)
- [モーション設定ガイド](../motion-setup/animation-guide)
