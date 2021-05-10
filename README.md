# typescript-tutorial
# TypeScript簡介、環境搭建
>Editor: Jung

## Intro
:::info
1. TypeScript是**JavaScript的超集合(Superset)**。
2. 它對JS進行了擴展，向JS中引入了**類型**的概念，並添加了許多新的特性。
3. TS程式碼需要通過 **編譯器(compiler)** 編譯為JS，然後再交由JS解析器執行。
4. TS完全兼容JS，換言之，任何的JS程式碼都可以直接當成JS使用。**(該程式碼在型別系統的監控下是沒有問題的)**。
5. 相較於JS而言，TS擁有了**靜態類型**，更加嚴格的語法，更強大的功能；TS可以在程式碼執行前就完成程式碼的檢查，減小了運行時異常的出現的機率；TS代碼可以編譯為任意版本的JS代碼(透過tsconfig的設定)，可有效解決不同JS運行環境的兼容問題；同樣的功能，TS的代碼量要大於JS，但由於TS的程式碼結構更加清晰，變量類型更加明確，在後期程式碼的維護中TS卻遠遠勝於JS。
:::

## 開發環境

1. 下載Node.js
2. 安裝Node.js
3. 使用npm 全域安裝TypeScript
    - 使用終端機
    - 輸入: npm i -g typescript
4. 使用 tsc 對 ts檔進行編譯
    - 使用終端機
    - 進入檔案所在目錄
    - 執行命令: tsc ${file_name}.ts

## 型別註記與型別推論
:::info
- **型別註記(主動)**

  - 型別註記是TS非常重要的一個特點

  - 通過型別註記可以指定TS中變量（參數、形參）的型別

  - 指定型別後，當為變量賦值時，TS編譯器會自動檢查值是否符合型別註記，符合則賦值，否則報錯

  - 簡而言之，型別註記給變量設置了型別，使得變量只能存儲某種型別的值

  - 語法：
    - ```typescript
      let 變量: 型別;
      
      let 變量: 型別 = 值;
      
      function fn(參數: 型別, 參數: 型別): 型別{
          ...
      }
      ```
- **型別推論(自動)**

  - TS擁有自動的型別判斷機制
  - 當對變量的聲明和賦值是同時進行的，TS編譯器會自動判斷變量的型別
  - 所以如果你的變量的聲明和賦值時同時進行的，可以省略掉型別註記

- **型別斷言**

  - 有些情況下，變量的型別對於我們來說是很明確，但是TS編譯器卻並不清楚，此時，可以通過型別斷言來告訴編譯器變量的型別，斷言有兩種形式：

    - 第一種

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (someValue as string).length;
        ```

    - 第二種

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (<string>someValue).length;
        ```

        
:::
## 型別
:::info
- 型別：

  |  型別   |       例子        |              描述              |
  | :-----: | :---------------: | :----------------------------: |
  | number  |    1, -33, 2.5    |            任意數字            |
  | string  | 'hi', "hi", `hi`  |           任意字串           |
  | boolean |    true、false    |       布林值true或false        |
  | 明文型別  |      其本身       |  限制變量的值就是該明文型別的值  |
  |   any   |         *         |            任意型別            |
  | unknown |         *         |         型別安全的any          |
  |  void   | 空值（undefined） |     沒有值（或undefined）      |
  |  never  |      沒有值       |          不能是任何值          |
  | object  |  {name:'Jung'}  |          任意的JS Objet          |
  |  array  |      [1,2,3]      |           任意JS 陣列           |
  |  tuple  |       [4,5]       | 元素，TS新增型別，固定長度陣列 |
  |  enum   |    enum{A, B}     |       枚舉，TS中新增型別       |
:::


- number

  - ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

- boolean

  - ```typescript
    let isDone: boolean = false;
    ```

- string

  - ```typescript
    let color: string = "blue";
    color = 'red';
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

- 明文型別

  - 也可以使用明文去指定變量的型別，通過明文可以確定變量的取值範圍

  - ```typescript
    let color: 'red' | 'blue' | 'black';
    let num: 1 | 2 | 3 | 4 | 5;
    ```

- any

  - ```typescript
    let d: any = 4;
    d = 'hello';
    d = true;
    ```

- unknown

  - ```typescript
    let notSure: unknown = 4;
    notSure = 'hello';
    ```

- void

  - ```typescript
    let unusable: void = undefined;
    ```

- never

  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

- object（沒啥用）

  - ```typescript
    let obj: object = {};
    ```

- array

  - ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

- tuple

  - ```typescript
    let x: [string, number];
    x = ["hello", 10]; 
    ```

- enum

  - ```typescript
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let c: Color = Color.Green;
    ```


:::info


- 自動編譯文件

  - 編譯文件時，使用 -w 指令後，TS編譯器會自動監視文件的變化，並在文件發生變化時對文件進行重新編譯。

  - 範例：

    - ```powershell
      tsc xxx.ts -w
      ```

- 自動編譯整個項目

  - 如果直接使用tsc指令，則可以自動將當前專案下的所有ts文件編譯為js文件。

  - 但是能直接使用tsc命令的前提時，要先在專案的根目錄下創建一個ts的配置文件 tsconfig.json

  - tsconfig.json是一個JSON文件，添加配置文件後，只需 tsc 命令即可完成對整個專案的編譯

  - 配置選項：

    - include

      - 定義希望被編譯文件所在的目錄

      - 默認值：["\*\*/\*"]

      - 範例：

        - ```json
          "include":["src/**/*", "tests/**/*"]
          ```

        - 上述範例中，所有src目錄和tests目錄下的文件都會被編譯

    - exclude

      - 定義需要排除在外的目錄

      - 默認值：["node_modules", "bower_components", "jspm_packages"]

      - 範例：

        - ```json
          "exclude": ["./src/hello/**/*"]
          ```

        - 上述範例中，src下hello目錄下的文件都不會被編譯

    - extends

      - 定義被繼承的配置文件

      - 範例：

        - ```json
          "extends": "./configs/base"
          ```

        - 上述範例中，當前配置文件中會自動包含config目錄下base.json中的所有配置信息

    - files

      - 指定被編譯文件的列表，只有需要編譯的文件少時才會用到

      - 範例：

        - ```json
          "files": [
              "core.ts",
              "sys.ts",
              "types.ts",
              "scanner.ts",
              "parser.ts",
              "utilities.ts",
              "binder.ts",
              "checker.ts",
              "tsc.ts"
            ]
          ```

        - 列表中的文件都會被TS編譯器所編譯

      - compilerOptions

        - 編譯選項是配置文件中非常重要也比較複雜的配置選項

        - 在compilerOptions中包含多個子選項，用來完成對編譯的配置

          - 項目選項

            - target

              - 設置ts代碼編譯的目標版本

              - 可選值：

                - ES3（默認）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

              - 範例：

                - ```json
                  "compilerOptions": {
                      "target": "ES6"
                  }
                  ```

                - 如上設置，我們所編寫的ts代碼將會被編譯為ES6版本的js代碼

            - lib

              - 指定代碼運行時所包含的庫（宿主環境）

              - 可選值：

                - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

              - 範例：

                - ```json
                  "compilerOptions": {
                      "target": "ES6",
                      "lib": ["ES6", "DOM"],
                      "outDir": "dist",
                      "outFile": "dist/aa.js"
                  }
                  ```

            - module

              - 設置編譯後代碼使用的模塊化系統

              - 可選值：

                - CommonJS、UMD、AMD、System、ES2020、ESNext、None

              - 範例：

                - ```typescript
                  "compilerOptions": {
                      "module": "CommonJS"
                  }
                  ```

            - outDir

              - 編譯後文件的所在目錄

              - 默認情況下，編譯後的js文件會和ts文件位於相同的目錄，設置outDir後可以改變編譯後文件的位置

              - 範例：

                - ```json
                  "compilerOptions": {
                      "outDir": "dist"
                  }
                  ```

                - 設置後編譯後的js文件將會生成到dist目錄

            - outFile

              - 將所有的文件編譯為一個js文件

              - 默認會將所有的編寫在全局作用域中的代碼合併為一個js文件，如果module制定了None、System或AMD則會將模塊一起合併到文件之中

              - 範例：

                - ```json
                  "compilerOptions": {
                      "outFile": "dist/app.js"
                  }
                  ```

            - rootDir

              - 指定代碼的根目錄，默認情況下編譯後文件的目錄結構會以最長的公共目錄為根目錄，通過rootDir可以手動指定根目錄

              - 範例：

                - ```json
                  "compilerOptions": {
                      "rootDir": "./src"
                  }
                  ```

            - allowJs

              - 是否對js文件編譯

            - checkJs

              - 是否對js文件進行檢查

              - 範例：

                - ```json
                  "compilerOptions": {
                      "allowJs": true,
                      "checkJs": true
                  }
                  ```

            - removeComments

              - 是否刪除註釋
              - 默認值：false

            - noEmit

              - 不對代碼進行編譯
              - 默認值：false

            - sourceMap

              - 是否生成sourceMap
              - 默認值：false

              

          - 嚴格檢查

            - strict
              - 啟用所有的嚴格檢查，默認值為true，設置後相當於開啟了所有的嚴格檢查
            - alwaysStrict
              - 總是以嚴格模式對代碼進行編譯
            - noImplicitAny
              - 禁止隱式的any類型
            - noImplicitThis
              - 禁止類型不明確的this
            - strictBindCallApply
              - 嚴格檢查bind、call和apply的參數列表
            - strictFunctionTypes
              - 嚴格檢查函數的類型
            - strictNullChecks
              - 嚴格的空值檢查
            - strictPropertyInitialization
              - 嚴格檢查屬性是否初始化

          - 額外檢查

            - noFallthroughCasesInSwitch
              - 檢查switch語句包含正確的break
            - noImplicitReturns
              - 檢查函數沒有隱式的返回值
            - noUnusedLocals
              - 檢查未使用的局部變量
            - noUnusedParameters
              - 檢查未使用的參數

          - 高級

            - allowUnreachableCode
              - 檢查不可達代碼
              - 可選值：
                - true，忽略不可達代碼
                - false，不可達代碼將引起錯誤
            - noEmitOnError
              - 有錯誤的情況下不進行編譯
              - 默認值：false
:::

:::info
- 通常情況下，實際開發中我們都需要使用模組打包工具對程式碼進行打包，TS同樣也可以結合模組打包工具一起使用，下邊以webpack為例介紹一下如何結合模組打包工具使用TS。

- 步驟：

  1. 初始化專案

     - 進入專案根目錄，執行命令 ``` npm init -y```
       - 主要作用：創建package.json文件

  2. 下載模組打包工具

     - ```npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin```
       - 共安裝了7個包
         - webpack
           - 模組打包工具webpack
         - webpack-cli
           - webpack的命令行工具
         - webpack-dev-server
           - webpack的開發服務器
         - typescript
           - ts編譯器
         - ts-loader
           - ts加載器，用於在webpack中編譯ts文件
         - html-webpack-plugin
           - webpack中html插件，用來自動創建html文件
         - clean-webpack-plugin
           - webpack中的清除插件，每次構建都會先清除目錄

  3. 根目錄下創建webpack的配置文件webpack.config.js

     - ```javascript
       const path = require("path");
       const HtmlWebpackPlugin = require("html-webpack-plugin");
       const { CleanWebpackPlugin } = require("clean-webpack-plugin");
       
       module.exports = {
           optimization:{
               minimize: false // 關閉程式碼壓縮，可選
           },
       
           entry: "./src/index.ts",
           
           devtool: "inline-source-map",
           
           devServer: {
               contentBase: './dist'
           },
       
           output: {
               path: path.resolve(__dirname, "dist"),
               filename: "bundle.js",
               environment: {
                   arrowFunction: false // 關閉webpack的箭頭函數，可選
               }
           },
       
           resolve: {
               extensions: [".ts", ".js"]
           },
           
           module: {
               rules: [
                   {
                       test: /\.ts$/,
                       use: {
                          loader: "ts-loader"
                       },
                       exclude: /node_modules/
                   }
               ]
           },
       
           plugins: [
               new CleanWebpackPlugin(),
               new HtmlWebpackPlugin({
                   title:'TS測試'
               }),
           ]
       
       }
       ```

  4. 根目錄下創建tsconfig.json，配置可以根據自己需要

     - ```json
       {
           "compilerOptions": {
               "target": "ES2015",
               "module": "ES2015",
               "strict": true
           }
       }
       ```

  5. 修改package.json添加如下配置

     - ```json
       {
         ...略...
         "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack",
           "start": "webpack serve --open chrome.exe"
         },
         ...略...
       }
       ```

  6. 在src下創建ts文件，並在並命令行執行```npm run build```對程式碼進行編譯，或者執行```npm start```來啟動開發服務器

:::

:::info
- 經過一系列的配置，使得TS和webpack已經結合到了一起，除了webpack，開發中還經常需要結合babel來對程式碼進行轉換以使其可以兼容到更多的瀏覽器，在上述步驟的基礎上，通過以下步驟再將babel引入到專案中。

  1. 安裝依賴包：
     - ```npm i -D @babel/core @babel/preset-env babel-loader core-js```
     - 共安裝了4個包，分別是：
       - @babel/core
         - babel的核心工具
       - @babel/preset-env
         - babel的預定義環境
       - @babel-loader
         - babel在webpack中的加載器
       - core-js
         - core-js用來使老版本的瀏覽器支持新版ES語法

  2. 修改webpack.config.js配置文件

     - ```javascript
       ...略...
       module: {
           rules: [
               {
                   test: /\.ts$/,
                   use: [
                       {
                           loader: "babel-loader",
                           options:{
                               presets: [
                                   [
                                       "@babel/preset-env",
                                       {
                                           "targets":{
                                               "chrome": "58",
                                               "ie": "11"
                                           },
                                           "corejs":"3",
                                           "useBuiltIns": "usage"
                                       }
                                   ]
                               ]
                           }
                       },
                       {
                           loader: "ts-loader",
       
                       }
                   ],
                   exclude: /node_modules/
               }
           ]
       }
       ...略...
       ```

     - 如此一來，使用ts編譯後的文件將會再次被babel處理，使得程式碼可以在大部分瀏覽器中直接使用，可以在配置選項的targets中指定要兼容的瀏覽器版本。
:::