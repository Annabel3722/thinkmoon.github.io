__NUXT_JSONP__("/post/520", (function(a,b){return {data:[{article:{cid:520,title:"初探JavaFx",slug:"520",created:1530278280,modified:1572254916,text:"\u003C!--markdown--\u003E\r\n## IDEA下开发JavaFx Application\r\n\r\n\u003E New \u003E project \u003E JavaFx Application\r\n\r\n## 添加SceneBuilder \r\n\r\n\u003E 1. 下载SceneBuilder\r\n\u003E 2. file | setting \u003E JavaFx \u003E add path\r\n\r\n## 设置自定义图标\r\n\r\n\u003E ` primaryStage.getIcons().add(new Image(\"file:res\u002Finternet.png\"));`\r\n\r\n## 打包生成exe\r\n\r\n\u003E File | project structure \u003E Artifacts \u003E JavaFx \u003E(class | title | Navite Bundle)\r\n\r\n注意目录文件要能找到\r\n\r\n## 事件绑定\r\n\r\n`fxml`\r\n\u003E `onAction add`\r\n\r\n`Java`\r\n\u003E 添加函数\r\n\r\n## fx:id 对象属性修改\r\n\r\n\u003E 1. 添加一个fxml成员变量\r\n\u003E 2. 调用setText(\"\");\r\n\r\n## 我的代码\r\n\r\n`MainApp.fxml`\r\n```xml\r\n\u003C?xml version=\"1.0\" encoding=\"UTF-8\"?\u003E\r\n\r\n\u003C?import javafx.geometry.Insets?\u003E\r\n\u003C?import javafx.scene.control.Button?\u003E\r\n\u003C?import javafx.scene.control.DialogPane?\u003E\r\n\u003C?import javafx.scene.control.Label?\u003E\r\n\u003C?import javafx.scene.control.TextArea?\u003E\r\n\u003C?import javafx.scene.control.TextField?\u003E\r\n\u003C?import javafx.scene.layout.FlowPane?\u003E\r\n\u003C?import javafx.scene.layout.Pane?\u003E\r\n\u003C?import javafx.scene.text.Font?\u003E\r\n\r\n\u003CFlowPane maxHeight=\"-Infinity\" maxWidth=\"-Infinity\" minHeight=\"-Infinity\" minWidth=\"-Infinity\" prefHeight=\"400.0\" prefWidth=\"800.0\" xmlns=\"http:\u002F\u002Fjavafx.com\u002Fjavafx\u002F8.0.121\" xmlns:fx=\"http:\u002F\u002Fjavafx.com\u002Ffxml\u002F1\" fx:controller=\"cn.thinkmoon.CSMA_CD.MainApp\"\u003E\r\n\u003Cchildren\u003E\r\n    \u003CPane prefHeight=\"400.0\" prefWidth=\"800.0\"\u003E\r\n        \u003Cchildren\u003E\r\n            \u003CButton layoutX=\"154.0\" layoutY=\"206.0\" mnemonicParsing=\"false\" onAction=\"#handleSendDataPackage\" text=\"发送数据包\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"14.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\u003C\u002FButton\u003E\r\n            \u003CButton layoutX=\"283.0\" layoutY=\"206.0\" mnemonicParsing=\"false\" text=\"重置操作\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"14.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\u003C\u002FButton\u003E\r\n            \u003CTextArea layoutX=\"500.0\" layoutY=\"51.0\" prefHeight=\"299.0\" prefWidth=\"277.0\" \u002F\u003E\r\n            \u003CLabel fx:id=\"host1SendNum\" layoutX=\"43.0\" layoutY=\"70.0\" text=\"主机1所需发送的数据包数：\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"17.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CLabel layoutX=\"43.0\" layoutY=\"130.0\" text=\"主机2所需发送的数据包数：\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"17.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CLabel layoutX=\"52.0\" layoutY=\"291.0\" text=\"主机1\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"18.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CLabel layoutX=\"410.0\" layoutY=\"291.0\" text=\"主机2\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"18.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CTextField layoutX=\"279.0\" layoutY=\"71.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"279.0\" layoutY=\"130.0\" \u002F\u003E\r\n            \u003CLabel layoutX=\"292.0\" layoutY=\"14.0\" text=\"模拟以太网发送过程\"\u003E\r\n                \u003Cfont\u003E\r\n                    \u003CFont size=\"17.0\" \u002F\u003E\r\n                \u003C\u002Ffont\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CLabel layoutX=\"48.0\" layoutY=\"327.0\" style=\"-fx-border-width: 1; -fx-border-color: #218ada;\" styleClass=\"tip\" text=\"信道空闲\" textFill=\"#218ada\"\u003E\r\n                \u003Cpadding\u003E\r\n                    \u003CInsets bottom=\"2.0\" left=\"2.0\" right=\"2.0\" top=\"1.0\" \u002F\u003E\r\n                \u003C\u002Fpadding\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CLabel layoutX=\"406.0\" layoutY=\"327.0\" style=\"-fx-border-width: 1; -fx-border-color: #218ada;\" styleClass=\"tip\" text=\"信道空闲\" textFill=\"#218ada\"\u003E\r\n                \u003Cpadding\u003E\r\n                    \u003CInsets bottom=\"2.0\" left=\"2.0\" right=\"2.0\" top=\"1.0\" \u002F\u003E\r\n                \u003C\u002Fpadding\u003E\r\n            \u003C\u002FLabel\u003E\r\n            \u003CTextField layoutX=\"114.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"140.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"170.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"199.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"226.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"257.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"283.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"311.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"340.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n            \u003CTextField layoutX=\"369.0\" layoutY=\"292.0\" prefHeight=\"23.0\" prefWidth=\"19.0\" \u002F\u003E\r\n        \u003C\u002Fchildren\u003E\r\n    \u003C\u002FPane\u003E\r\n      \u003CDialogPane \u002F\u003E\r\n\u003C\u002Fchildren\u003E\r\n\u003C\u002FFlowPane\u003E\r\n\r\n```\r\n`MainApp.java`\r\n```java\r\npackage cn.thinkmoon.CSMA_CD;\r\n\r\nimport javafx.application.Application;\r\nimport javafx.event.ActionEvent;\r\nimport javafx.fxml.FXML;\r\nimport javafx.fxml.FXMLLoader;\r\nimport javafx.scene.Parent;\r\nimport javafx.scene.Scene;\r\nimport javafx.scene.control.Label;\r\nimport javafx.scene.image.Image;\r\nimport javafx.stage.Stage;\r\n\r\nimport java.io.IOException;\r\n\r\npublic class MainApp extends Application {\r\n    private Stage primaryStage;\r\n    @FXML\r\n    private Label host1SendNum;\r\n    @Override\r\n    public void start(Stage primaryStage) throws Exception{\r\n        this.primaryStage = primaryStage;\r\n        initRootLayout();\r\n    }\r\n    \u002F**\r\n     * 初始化主界面布局\r\n     *\u002F\r\n    public void initRootLayout() {\r\n        try {\r\n            Parent root = FXMLLoader.load(getClass().getResource(\"view\u002FMainApp.fxml\"));\r\n            primaryStage.setTitle(\"CSMA\u002FCD协议仿真及演示\");\r\n            primaryStage.setScene(new Scene(root, 800, 400));\r\n            primaryStage.setResizable(false);\r\n            primaryStage.getIcons().add(new Image(\"file:res\u002Finternet.png\"));\r\n            primaryStage.show();\r\n        } catch (IOException e) {\r\n            e.printStackTrace();\r\n        }\r\n    }\r\n    public static void main(String[] args) {\r\n        launch(args);\r\n    }\r\n    @FXML\r\n    private void handleSendDataPackage(ActionEvent event) {\r\n\r\n    }\r\n}\r\n\r\n```\r\n",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:385,likes:a}}],fetch:{},mutations:void 0}}(0,"1")));