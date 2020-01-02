var tipuesearch = {"pages": [{'title': 'WEEK', 'text': '\n \n \n WEEK2~5 \n WEEK6~9 \n WEEK10~14 \n WEEK15~18 \n \n \n \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK2~5', 'text': '', 'tags': '', 'url': 'WEEK2~5.html'}, {'title': 'WEEK2', 'text': '\n 在自己的git hub建立新倉儲 cad2019 ，並且到mde.tw下載2019Fall可攜套件.7z \n 使用git config --global user.name "user name"與git config --global user.email " user email " 設定自己的名字與email \n 使用git submodule add新的指令 指令如下 ( git submodule add https://github.com/mdecourse/cmsimde.git cmsimde ) \n 輸入指令python -m pip install flask cors \n \n 開啟近端開始更新內容，更新完成使用一上所使用的 git指令(git status、git pull ..... )\xa0 \n', 'tags': '', 'url': 'WEEK2.html'}, {'title': 'WEEK3', 'text': 'Solvespace 編譯 \n 編譯步驟: 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone https://github.com/solvespace/solvespace.git \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行. \n \n', 'tags': '', 'url': 'WEEK3.html'}, {'title': 'WEEK4', 'text': '沒進度 \n', 'tags': '', 'url': 'WEEK4.html'}, {'title': 'WEEK5', 'text': 'solvespace的基本操作練習 \n 這次所畫的圖是\xa0Solvespace Tutorial 4 - Assembly \n', 'tags': '', 'url': 'WEEK5.html'}, {'title': 'WEEK6~9', 'text': '', 'tags': '', 'url': 'WEEK6~9.html'}, {'title': 'WEEK6', 'text': '1.到課程網站中解壓縮web_vrep2與V-REP3 \n 2.打開V-REP3內的應用程式 \n 3.導入web_vrep2的two_wheeler.ttt檔案 \n 4.打開web_vrep2內的app.py按下GO \n 5.複製網址打開網頁 \n 6.操作車子 \n \n', 'tags': '', 'url': 'WEEK6.html'}, {'title': 'WEEK7', 'text': '1.到E:\\tmp\\solvespace\\build\\src\\CMakeFiles\\solvespace.dir內刪除obj檔案 \n 2.E:\\tmp\\solvespace\\src尋找slovespace.cpp檔案進行編輯 \n 3.搜尋GPL 並把上面改成compiled by 自己的學號 \n 4.再進入E:\\tmp\\solvespace\\build，輸入指令cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 5.輸入另一個指令mingw32-make \n 6.到E:\\tmp\\solvespace\\build\\bin裡面打開slevespace.exe \n 7.點選Help內的About確認是否編譯完成 \n \n (2) \n slovespace練習 \n \n', 'tags': '', 'url': 'WEEK7.html'}, {'title': 'WEEK8', 'text': '1.打開LEO並且把pelican.leo拖進去 \n 2.到pelican設定的@edit貼上自己的biog網址 \n 3.對local-blog按右鍵Goto Script 複製裡面指令 \n 4.到自己資料夾內輸入這段指令 \n 5.PUSH \n 6.到近端確認是否完成 \n \n (2) \n 1.首先先把start複製下來 \n 2.到2019/data/webots貼上剛剛複製的start \n 3.把剛剛複製的改名並且拖到編輯器裡面 \n 4.增加set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n 5.並在path=%..這段後面新增%path_webots% \n 6.在下面再新增一段start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe \n 7.啟動 \n', 'tags': '', 'url': 'WEEK8.html'}, {'title': 'WEEK9', 'text': '不知道為甚麼沒有做~ \n', 'tags': '', 'url': 'WEEK9.html'}, {'title': 'WEEK10~14', 'text': '', 'tags': '', 'url': 'WEEK10~14.html'}, {'title': 'WEEK10', 'text': 'Creo開發緣起 \n Creo Parametric ，舊稱Pro/ENGINEER，是美國 參數科技公司 （PTC, Parametric Technology Corporation）推出的一款 EDA 工具，主要用於三維製圖、 建模 ，在複雜的 三維模型 設計方面有優勢。該軟體是第一個運用「 參數 化設計」、「 實體造型 」「特徵導向」思想的三維設計軟體，即用有限個數的參數去約束模型，而不用擔心模型有多麼複雜。該軟體運行在WINDOWS上。 \n 為了和新的「 Creo 」設計工具集統一名稱，Pro/ENGINEER在2010年8月改名為「 Creo Elements/Pro 」,2011年6月再改名為「 Creo Parametric 」 \n 主要特性 :\xa0 \n Pro/E第一個提出了 參數化設計 的概念，並且採用了單一數據庫來解決特徵的相關性問題。另外，它採用模塊化方式，用戶可以根據自身的需要進行選擇，而不必安裝所有模塊。 Pro/E的基於特徵方式，能夠將設計至生產全過程集成到一起，實現並行工程設計。它不但可以應用於工作站，而且也可以應用到單機上。 \n Pro/E採用了模塊方式，可以分別進行 草圖繪製 、 零件製作 、 裝配設計 、 鈑金設計 、 加工處理 等，保證用戶可以按照自己的需要進行選擇使用。 \n 1.參數化設計 \n 相對於產品而言，可以把它看成幾何模型，而無論多麼複雜的幾何模型，都可以分解成有限數量的構成特徵，而每一種構成特徵，都可以用有限的參數完全約束，這就是參數化的基本概念。 \n 2.基於特徵建模 \n Pro/E是基於特徵的實體模型化系統，工程設計人員採用具有智能特性的基於特徵的功能去生成模型如腔、殼、倒角及圓角，您可以隨意勾畫草圖，輕易改變模型。這一功能特性給工程設計者提供了在設計上從未有過的簡易和靈活，特別是在設計系列化產品上更是有得天獨到的優勢 \n 3.單一數據庫 \n Pro/Engineer是建立在統一基層上的數據庫上，不像一些傳統的CAD/CAM系統建立在多個數據庫上。所謂 單一數據庫 ，就是工程中的資料全部來自一個庫，使得每一個獨立用戶在為一件產品造型而工作，不管他是哪一個部門的。換言之，在整個設計過程的任何一處發生改動，亦可以前後反應在整個設計過程的相關環節上。例如，一旦工程詳圖有改變，NC（數控）工具路徑也會自動更新；組裝工程圖如有任何變動，也完全同樣反應在整個三維模型上。這種獨特的數據結構與工程設計的完整的結合，使得一件產品的設計結合起來。這一優點，使得設計更優化，成品質量更高，產品能更好地推向市場，價格也更便宜。 \n 4.直觀裝配管理 \n Pro/ENGINEER的基本結構能夠使您利用一些直觀的命令，例如“貼合”、“插入”、“對齊”等很容易的把零件裝配起來，同時保持設計意圖。高級的功能支持大型複雜裝配體的構造和管理，這些裝配體中零件的數量不受限制。 \n 5.易於使用 \n 菜單以直觀的方式聯級出現，提供了邏輯選項和預先選取的最普通選項，同時還提供了簡短的菜單描述和完整的在線幫助，這種形式使得容易學習和使用。 \n *歷史版本 \n \n \n \n Pro/ENGINEER Release 1.0 \n 1 \n 1987年 \n \n \n Pro/ENGINEER Release 8.0 \n 8 \n 1991年 \n \n \n Pro/ENGINEER Release 9.0 \n 9 \n 1992年 \n \n \n Pro/ENGINEER Release 10.0 \n 10 \n 1993年 \n \n \n Pro/ENGINEER Release 11.0 \n 11 \n 1993年 \n \n \n Pro/ENGINEER Release 12.0 \n 12 \n 1993年 \n \n \n Pro/ENGINEER Release 13.0 \n 13 \n 1994年 \n \n \n Pro/ENGINEER Release 14.0 \n 14 \n 1994年 \n \n \n Pro/ENGINEER Release 15.0 \n 15 \n 1995年 \n \n \n Pro/ENGINEER Release 16.0 \n 16 \n 1996年 \n \n \n Pro/ENGINEER Release 17.0 \n 17 \n 1997年 \n \n \n Pro/ENGINEER Release 18.0 \n 12 \n 1997年 \n \n \n Pro/ENGINEER Release 19.0 \n 19 \n 1998年 \n \n \n Pro/ENGINEER Release 20.0 \n 20 \n 1998年 \n \n \n Pro/ENGINEER 2000i \n 21 \n 1999年 \n \n \n Pro/ENGINEER 2000i2 \n 22 \n 2000年 \n \n \n Pro/ENGINEER 2001 \n 23 \n 2001年 \n \n \n Pro/ENGINEER Wildfire \n 24 \n 2002年 \n \n \n Pro/ENGINEER Wildfire 2.0 \n 25 \n 2004年 \n \n \n Pro/ENGINEER Wildfire 3.0 \n 27 \n 2006年 \n \n \n Pro/ENGINEER Wildfire 4.0 \n 29 \n 2008年 \n \n \n Pro/ENGINEER Wildfire 5.0 \n 31 \n 2009年 \n \n \n Creo Elements/Pro 5.0 （M065） \n 31 \n 2010年10月 \n \n \n Creo Parametric 1.0 \n 32 \n 2011年6月11日 \n \n \n Creo Parametric 2.0 \n 33 \n 2012年4月9日 \n \n \n Creo Parametric 3.0 \n 34 \n 2014年6月17日 \n \n \n Creo Parametric 4.0 \n 35 \n 2016年12月15日 \n \n \n \n', 'tags': '', 'url': 'WEEK10.html'}, {'title': 'WEEK11', 'text': 'solidworks開發緣起 \n 1993年 \n 創始人 Jon Hirschtick 招募了一個工程師團隊，旨在使3D CAD軟體更容易上手。Hirschtick從廣受好評的麻省理工學院二十一點隊的成員中籌得100萬美元，開始了他的新事業。該團隊的目標是構建一個基於 Windows平台 的易於使用且價格合理的軟體。這在當時真的是革命性的存在，當時所有其他流行的CAD系統都是在 Unix上構建 的。經過幾年的開發，最初發布的SolidWorks終於來了。 \n 1995年 \n 1.與其他CAD系統的18,000美元相比，SolidWorks的售價 僅為4,000美元 。 \n 2.該軟體更易於使用：與市場上其他CAD軟體相比，用戶只需 3個月 的使用經驗就可以輕 \n 3.鬆上手。易用性的很大一部分原因在於它採用了現代著名的Windows介面。 \n 4.模型的可視化是前所未有的。在光線充足的陰影環境中的構建功能與傳統建模空間形成 \n 5.鮮明對比，傳統建模空間僅顯示黑色背景下的線框。 \n 6.我們現在熟悉的類似 FeatureManager 用於顯示模型的構建歷史。 \n 7.零件，組件和圖紙從一開始就可用。用戶無法在組件中應用配合，但仍可將組件放置到位。 \n 1996年 \n 1.介紹了上下建模。允許使用自上而下的裝配建模方法。 \n 2.用戶現在可以在裝配中使用配合併捕捉動態裝配運動。除了干擾檢測，用戶還可以更輕 \n 3.鬆地驗證形狀，適合度和功能。 \n 4.拖放功能可將一個裝配體零部件移動到另一個裝配體中。 部分配置。 \n 5.自動化物料清單。只有一種方法沒有自定義選項，但它很有效。 \n 1997年 \n 1.鈑金功能首次發布。 \n 2.標準庫功能推出。 \n 3. Loft 功能現在可以使用引導曲線。 \n 4. SolidWorks \xa0 被 \xa0 Dassault Systemes （達索公司）收購。 \n 1997年二次修改 \n 1.面部圓角介紹。 \n 2.裝配配置。 \n 3.完全可定製的組件爆炸視圖。 \n 4.SolidWorks Viewer作為免費產品推出，可與非CAD用戶共享設計，並在與外部方共享 \n 5.數據時保護智慧財產權。 \n 1998年 \n 1.已發布功能面板，現在與設計庫的功能類似。可以拖放到模型上的預製功能。 \n 2.草圖診斷可幫助用戶理解草圖不適用於特定特徵的原因。 \n 3. Lofts 和 Sweeps 的相切控制。 \n 4.組合件封包(Assembly Envelopes)。 \n 1998二次修改 \n 1.智能配合在建造組件中更多地使用拖放式自動化。 \n 2.隨著用戶不斷建造越來越大的組件，輕量級組件可以幫助提高性能。 \n 3.表面處理工具首次推出。 \n 4 .FeatureWorks 用於導入文件，能夠更有效地使用來自其他軟體的現有3D數據。 \n 5.首次 CSWP 考試發布。它是手寫的，並通過郵件發送。 \n 1999年 \n 1. Palm Springs 的第一個SolidWorks World。 \n 2.拖動組件時對組件的實時碰撞檢測。 \n 3.3D草圖介紹。 \n 4.管道模塊發布。 \n 5.2D命令模擬器有助於縮小與以前AutoCAD用戶的差距。 \n 2000年 \n 1.發布 eDrawings 。 \n 2.實現了 Hole Wizard 接口。 \n 3.表面處理更有用，能夠編織，修剪和延伸表面。 \n 4.SolidWorks Explorer。 \n 5.動態間隙檢測可驗證裝配部件之間的最小間隙。 \n 2001年 \n 1.鏡像組件中的組件。 \n 2.引領互動。以前，在任何CAD系統中，只要選擇了命令，軟體就會在模型頂部顯示整個 \n 3.對話框。SOLIDWORKS開始廢除這一點，並轉向我們現在知道的 \n 4.PropertyManagers，並將陰影標註返回到模型。 \n 5.現在允許靈活的子組件進一步捕捉準確的裝配運動。 \n 6.介紹填充表面命令。 \n 7.DXF / DWG導入嚮導發布。 \n 8.3D Meeting（3D會議），最終在幾個版本之後退出。利用Microsoft Live Meeting並允許與螢幕共享進行實時同步會議。 \n 2001年二次修改 \n 1.運動模擬功能現在可以捕捉組件中移動的組件的實際物理動態。 \n 2.介紹大型裝配模式。 \n 3.實現了2D到3D轉換工具，以便將2D CAD數據輕鬆轉換為功能齊全的3D模型。 \n 4.介紹SolidWorks \xa0 Office，將常用的插件如 PhotoWorks ， Toolbox ， Utilities 和 \n 5.FeatureWorks打包成一個產品。 \n 6.Dassault Systemes收購了SRAC並開始將仿真引入主流設計流程。 \n 2003年 \n 1. COSMOSXpress 是第一款 Xpress 產品，它為每個桌面帶來了簡單的零件驗證。 \n 2.3DContentCentral為用戶提供了一個交互和共享模型的社區。 \n 3.多體零件設計。這是一個非常大的問題，現在是焊接，鈑金和模具設計的基礎。 \n 4.收購了 PDMWorks 並引入了SolidWorks Office Professional軟體包。開始將PDM作為 \n 5.每個客戶提供的一部分。 \n 2004年 \n 1.介面更新，包括 CommandManager ，彈出FeatureManager和PropertyManager和 \n 2.ConfigurationManager的管理器視圖選項卡。 \n 3.介紹了 Mold Tools （模具工具）和 Weldments （焊件）。 \n 4.實施Auto Balloon命令以匹配物料清單物料編號中的balloon編號。 \n 5.限制配合以捕捉更複雜的裝配運動。 \n 6.推出了 RealView Graphics ，以便隨時提供更逼真的圖像。 \n 2005年 \n 1.繪圖比較，為用戶提供工具來比較兩個圖紙之間的變化。 \n 2 .Flex 功能。 \n 3.電氣布線，與管道布線一起使用。 \n 4.在圖紙中自動標註，以捕捕捉模型中已定義的尺寸。 \n 5.能夠繪製無限的線條。 \n 6.SolidWorks Rx發布，旨在提供幫助技術支持更好地去識別問題。 \n 2006年 \n 1.發布 Smart Components 功能，允許為硬體之類的物件安裝智能裝配組件。 \n 2.介紹填充圖案。 \n 3.介紹草圖塊。 \n 4.顯示狀態。 \n 5.設計檢查器，允許用戶根據公司標準動態檢查他們的模型。 \n 6.添加了相機視圖功能。 \n 7.發布SolidWorks Office Premium（白金版）軟體包，包括 Routing ， COSMOSWorks8 .和 \xa0 COSMOSMotion 進行模擬，以及 ScanTo3D 。 \n 2007年 \n 1. SWIFT 工具可幫助設計人員在提供自動化解決方案時動態了解模型存在問題或錯誤的原因。 \n 2.可在組件中使用皮帶，鏈條和齒輪功能。 \n 3.用於表面處理的自由形式命令。 \n 4.介紹 Enterprise PDM 。 \n 2008年 \n 1.使用新的菜單欄和 CommandManager 布局對用戶介面進行全面檢修和現代化優化。上 \n 2.下工具欄和快捷工具欄首次可用。所有這些介面組件現在都可以完全自定義。 \n 3.Instant3D，提供拖動和操縱幾何體的功能，可輕鬆測試不同的設計概念。 \n 4.發布 TolAnalyst 。 \n 5.設計剪貼畫，通過剖析現有數據以便在另一個模型中重複使用，可以更輕鬆地重用現有的2D和3D數據。 \n 6.推出 DriveWorksXpress 和 DFMXpress 。 \n 2009年 \n 1.PhotoView360圖像渲染作為第一個渲染器引入，以訪問處理器的多核功能。 \n 2. SpeedPak 現在可用於簡化裝配中的組件。 \n 3.為追求更高目標，所以引入傳感器。 \n 4. CircuitWorks 發布並添加到SolidWorks Office Premium（白金版）軟體包中。 \n 5.發布 3DVIA Composer 。 \n 2010年 \n 1.現在提供可持續發展方案，幫助用戶了解其設計對環境的影響。 \n 2.快速標註尺寸使得創建細節圖更加容易。 \n 3.介紹基於事件的運動模擬。 \n 4.首次提供滑鼠手勢快捷鍵。 \n 5.現在可以進行多體鈑金建模。 \n 2011年 \n 1.PhotoView360完全集成到SolidWorks介面中。 \n 2.現在可以使用Walk-through（走查）功能。 \n 3.引入了 Defeature 工具以幫助限制模型中的智慧財產權數量。 \n 4.現在可以在 Simulation 中使用平面簡化。 \n 5.自動排列圖紙中的尺寸。 \n 2012年 \n 1.方程式編輯器經過徹底檢修後，更加用戶友好。 \n 2.介紹 Large Design Review 。 \n 3. Feature Freeze 現在可以讓用戶更好地控制性能。 \n 4.鈑金增強：邊線法蘭的更多選擇，引入掃描法蘭，使用的成型工具更加人性化。 \n 5.發布成本計算加載項。 \n 2013年 \n 1. View Orientation 有一個對話框，不再只是在工具欄上了。還引入了選擇器多維數據集 \n 2.以及保存視圖功能以便之後使用。 \n 3.以前的版本文件互操作性：2013文件現在可以在2012 SP5中打開。 \n 4.介紹 Conic 草圖實體。 \n 5.相交功能。 \n 6. Customer Portal （客戶門戶網站）上提供了 CAD Admin Dashboard （CAD管理員儀錶板）。 \n 2014年 \n 1.能夠通過上下工具欄快捷方式添加標準配合。 \n 2.替換草圖實體使用戶能夠用新的實體替換舊實體並仍然維護下游引用。 \n 3.推出了鈑金中的 Lofted Bend 功能。 \n 4.能夠創建 Conic Fillets （圓錐倒角）。 \n 5.樣式樣條草圖命令。 \n 6.自動縮放第一個草圖。現在，在草圖上創建第一個維度時，所有實體都會自行調整大小 \n 7.以進行縮放。 \n 8.能夠配置結構成員配置文件。現在允許配置輪廓草圖，這大大改變了需要組織的文件數量。 \n 9.MySolidWorks作為能夠提供自學培訓以及所有SolidWorks的在線資源社區發布。 \n 2015年 \n 1.動態參考可視化，幫助用戶了解父/子關聯。 \n 2.引入了選擇集，以便於重複使用幾何選擇組合。 \n 3.能夠直接從SolidWorks進行3D列印。 \n 4.Simulation中的疲勞分析。 \n 5.Profile center mate（輪廓中心配合）。 \n 6.發布 SolidWorks MBD 。 \n 2016年 \n 1.用戶介面重新設計，包括更好地支持高解析度顯示器。 \n 2.藍色/灰色盤默認採用傳統配色方案。 \n 3.引入了選擇麵包屑，使相關命令更易於訪問。 \n 4.實現 Mate Controller 工具，以更加可訪問的方式捕捉裝配定位。 \n 5.能夠全局替換失敗的配合實體。 \n 6.介紹 Thread 功能。 \n 7.發布 PDM Standard （標準版）並添加到SolidWorks Professional專業版軟體包中。 \n 8.SolidWorks Visualize作為獨立的圖片渲染應用程式發布。 \n 2017年 \n 1.引入3D互連以簡化不同文件類型與SolidWorks的協作。 \n 2.Asset Publisher具有 ground plane （地層）和 magnetic mates （磁配對），可輕鬆實現 \n 3.大型裝配布局。 \n 4.引入了 Advanced Hole （高級孔）功能。 \n 5.增強了Wrap功能，可在更多類型的面選擇上創建幾何體。 \n 6.陰影草圖輪廓增強選擇和操作功能。 \n 2018年 \n 1.SolidWorks啟動時的歡迎對話框。 \n 2.用戶設置現在可以登錄。新發布的在線許可也可以遵循此登錄，在需要在多台計算機上 \n 3.使用SolidWorks時為用戶提供另一種選擇。 \n 4.選擇幾何圖形，允許用戶忽略幾何圖形並在其上選擇其他實體。 \n 5.引入了標籤和插槽功能，自動執行以前在鈑金和焊件中常用的手動方法。 \n 6.能夠鏡像3D草圖中的實體。 \n 7.首次使用筆，觸屏和基於手勢的草圖繪製功能。 \n 8.引入拓撲仿真分析。 \n 2019年 \n 1.顯著改進裝配性能。 \n 2. Silhouette defeature 命令，簡化了從模型中刪除細節以提高性能或保護智慧財產權的過程。 \n 3.能夠按狀態對mates進行分組。 \n 4.部分倒角和圓角。 \n 5.將圖像轉換為網格/凹凸貼圖，從圖像文件創建實際的3D幾何體。 \n', 'tags': '', 'url': 'WEEK11.html'}, {'title': 'WEEK12', 'text': 'NX開發緣起 \n 1960年 \n 由 McDonnell Douglas Automation \xa0 公司成立。 \n 1976年， \n 收購了Unigraphics CAD/CAE/CAM系統的開發商——United Computing公司，UG的雛形問世。 \n 1983年 \n UG 正式 上市。 \n 1986年 \n Unigraphics 吸取了業界領先的、為實踐所證實的實體建模核心—— Parasolid 的部份功能。 \n 1989年 \n Unigraphics宣布支持 UNIX 平台及開放系統的結構，並將一個新的與STEP標準兼容的三維實體建模核心 Parasolid 引入 UG 。 \n 1990年 \n Unigraphics作為McDonnell Douglas（波音飛機公司）的機械CAD/CAE/CAM的標準。 \n 1991年 \n Unigraphics開始了從 CAD/CAE/CAM 大型機版本到工作站版本的轉移。 \n 1993年 \n Unigraphics引入 複合建模 的概念，可以實體建模、曲線建模、框線建模、半參數化及參數化建模融為一體。 \n 1995年 \n Unigraphics 首次 發布了 Windows NT 版本。 \n 1996年 \n Unigraphics發布了能自動進行干涉檢查的高級裝配功能模塊、最先進的 CAM模塊 以及具有A類曲線造型能力的工業造型模塊：它在全球迅猛發展，占領了巨大的市場份額，已經成為高端及商業CAD/CAE/CAM應用開發的常用軟體。 \n 1997年 \n Unigraphics新增了包括 WAVE （幾何連結器）在內的一系列工業領先的新增功能。WAVE這一功能可以定義、控制、評估產品模板，被認為是在未來幾年中業界最有影響的新技術。 \n 2000年 \n Unigraphics發布了新版本的 UG17 ， 最新版本 的，是UGS成為 工業界第一個 可以裝載包含深層嵌入「 基於工程知識 」（KBE）語言的世界級MCAD軟體產品的供應商。 \n 2001年 \n Unigraphics發布了新版本 UG18 ，新版本對舊版本的對話框進行了調整，使得在最少的對話框中能完成更多的工作，從而簡化了設計。 \n 2002年 \n Unigraphics發布了 UG NX1.0.新版本 繼承了UG18的優點，改進和增加了許多功能，使其功能更強大，更完美。 \n 2003年 \n Unigraphics發布了新版本 UG NX2.0 \xa0 。新版本基於最新的行業標準，它是一個全新支持PLM的體系結構。EDS公司同其主要客戶一起，設計了這樣一個先進的體系結構，用於支持完整的產品工程。 \n 2004年 \n Unigraphics發布了新版本的 UG NX3.0 ，它為用戶的產品設計與加工過程提供了數字化造型和驗證手段，。它針對用戶的虛擬產品的設計和工藝設計的需要，提供經過實踐驗證的解決方案。 \n 2005年 \n Unigraphics發布了新版本的 UG NX4.0. 它是嶄新的NX體系結構，使得開發與應用更加簡單和快捷。 \n 2007年 \n UGS公司發布了 NX 5.0 \xa0 – NX的下一代數字產品開發軟體，幫助用戶以更快的速度開發創新產品，實現更高的成本效益。 \n 2008年 \n 6月，Siemens PLM Software發布 UG NX 6.0 ，建立在新的同步建模技術基礎之上的NX 6將在市場上產生重大影響。同步建模技術的發布標誌著NX的一個重要里程碑，並且向 MCAD 市場展示 Siemens 的鄭重承諾。 NX 6將為我們的重要客戶提供極大的生產力提高。 2009年 \n 10月 – 西門子工業自動化業務部旗下機構、全球領先的產品生命周期管理（PLM）軟體與服務提供商Siemens PLM Software 宣布推出其旗艦數字化產品開發解決方案NX 軟體的最新版。 UG NX 7.0 引入了「 HD3D 」（ 三維精確描述 ）功能，即一個開放、直觀的可視化環境，有助於全球產品開發團隊充分發掘PLM信息的價值，並顯著提升其制定卓有成效的產品決策的能力。此外， NX 7.0 還 新增了同步建模技術 的增強功能。修復了很多6.0所存在的漏洞，穩定性方面較6.0有很大的提升。 \n 2010年 \n 5月20日– Siemens PLM Software在 上海世博會 發布了功能增強的NX7最新版本（ UG NX 7.5 ），NX GC 工具箱將作為NX 7最新版本的一個應用模塊與NX 7一起同步發布。NX GC 工具箱是為滿足中國用戶對NX特殊需求推出的本地化軟體工具包。在符合國家標準（GB）基礎上，NX GC 工具箱做了進一步完善和大量的增強工作。 \n 2011年 \n 9月 - Siemens PLM Software發布了 UG NX 8.0 \n 2012年 \n 10月 - Siemens PLM Software發布了 UG NX 8.5 \n 2013年 \n 10月- Siemens PLM Software發布了 UG NX 9.0 \n 2014年 \n 8月- Siemens PLM Software發布了 UG NX 10.0 \n 2016年 \n 8月- Siemens PLM Software發布了 UG NX 11.0 \n 2017年 \n 10月- Siemens PLM Software發布了 UG NX 12.0 \n', 'tags': '', 'url': 'WEEK12.html'}, {'title': 'WEEK13', 'text': 'inventor開發緣起 \n 是美國AutoDesk公司推出的一款三維可視化實體模擬軟件Autodesk Inventor Professional（AIP），目前已推出最新版本AIP2019。同時還推出了iphone版本，在 app store 有售。Autodesk Inventor Professional包括Autodesk Inventor三維設計軟件；基於AutoCAD平台開發的二維機械製圖和詳圖軟件AutoCAD Mechanical；還加入了用於纜線和束線設計、管道設計及PCB IDF文件輸入的專業功能模塊，並加入了由業界領先的ANSYS技術支持的FEA功能，可以直接在Autodesk Inventor軟件中進行應力分析。在此基礎上，集成的數據管理軟件Autodesk Vault-用於安全地管理進展中的設計數據。 \n 1 應用 \n 由於Autodesk Inventor Professional集所有這些產品於一體，因此提供了一個 無風險 的 二維 到 三維 轉換路徑，您能以自己的進度轉換到三維，保護的二維圖形和知識投資，並且清楚地知道自己在使用目前市場上 DWG 兼容性最強的平台。Autodesk Inventor Professional軟件是一套全面的設計工具，用於創建和驗證完整的數字樣機；幫助製造商減少物理樣機投入，以更快的速度將更多的創新產品推向市場。 \n 為 適用於設計流程的理想工具 及 滿足設計需求的專用工具 \n 2 運動仿真 \n 借助Autodesk Inventor Professional的運動仿真功能，用戶能了解機器在真實條件下如何運轉，而能節省花費在構建物理樣機上的成本、時間和高額的諮詢費用。 \n 用戶可以據實際工況添加載荷、摩擦特性和運動約束，然後通過運行仿真功能驗證設計。 借助與應力分析模塊的無縫集成，可將工況傳遞到某一個零件上，來優化零部件設計。 \n 3 增強功能仿真 \n 借助 Autodesk Inventor Professional 的 運動仿真功能 ，用戶能了解機器在真實條件下如何運轉，而能節省花費在構建物理樣機上的成本、時間和高額的諮詢費用。 \n 用戶可以據實際工況添加載荷、摩擦特性和運動約束，然後通過運行仿真功能驗證設計。 借助與應力分析模塊的無縫集成，可將工況傳遞到某一個零件上，來優化零部件設計。 \n \n （增強功能） 有輸出到應力分析中、 約束轉換、 載荷定義、可視化、點軌跡、圖示器、模型簡化、薄壁件處理、將分析數據導入ANSYS。 \n 4 布管設計 \n Autodesk Inventor? Professional可以幫助用戶節約創建管材、管件和軟管所需要的時間。 \n 使用Autodesk Inventor? Professional中規範的布管工具來選擇合適的配件，確保管路符合最小和最大長度、舍入增量和彎曲半徑這三類設計規則。 \n 5 線束設計 \n 從電路設計軟件（包括 AutoCAD Electrical 軟件）導出的導線表，Autodesk Inventor? Professional 可以接續進行電纜和線束設計。 \n 將電纜與線束（包括軟質排線）集成到數字樣機中，用戶可以準確計算路徑長度，避免過小的彎曲半徑，並確保電氣零部件與機械零部件匹配，從而節約大量時間和成本。 \n 6 CAD集成 \n Autodesk Inventor Professional能夠幫助用戶充分利用原有的AutoCAD 技能和DWG 設計數據，從而體驗數字樣機帶來的種種優勢。 \n Autodesk Inventor Professional集成了業界領先的二維和三維設計功能。 無需使用 數據轉換器 ，利用DWG TrueConvert就能直接讀寫DWG文件，同時還能保持與 三維模型 的關聯性。 \n 借助Autodesk Inventor Professional，用戶可以輕鬆訪問原有的二維信息，重複利用寶貴的設計數據。 此外，由於用戶可以將Inventor 的工程圖保存為DWG 文件，因此他們可以將從數字樣機中獲得的分析結果與那些使用AutoCAD 軟件的合作夥伴及供應商共享。 從三維零件和裝配設計中生成的視圖，如示意圖和工廠佈置圖等，也可以與AutoCAD 數據相集成。 用戶可以通過插入新的三維設計視圖來更新原有的二維工程圖，以降低升級現有設備的成本。 \n 7 零件設計 \n Inventor 可以幫助設計人員更為輕鬆地重複利用已有的設計數據，生動地表現設計意圖。借助其中全面關聯的模型，零件設計中的任何變化都可以反映到裝配模型和工程圖文件中。由此，設計人員的工作效率將得到顯著提高。 \n Inventor 可以使經常使用的自定義特徵和零件的設計標準化和系列化，從而提高客戶的生產效率。 利用Inventor 中的iPart技術，設計公司可以輕鬆設置智能零件庫，以確保始終以同種方式創建常用零件。 \n 8 鈑金設計 \n Autodesk Inventor 能夠幫助用戶簡化複雜鈑金零件的設計。 \n Inventor 中的數字樣機結合了加工信息（如沖壓工具參數和自定義的折彎表）、精確的鈑金折彎模型以及展開模型編輯環境。 在展開模型編輯環境中，製造工程師可以對鈑金展開模型進行細微的改動。 因此能夠幫助用戶提高設計鈑金零件的效率。 \n \n 9 裝配設計 \n Inventor將設計加速器與易於使用的裝配工具相結合，使用戶可以確保裝配設計中每一個零部件的安裝正確。 \n 精確地驗證干涉情況和各種屬性，以便一次性創建高質量的產品。 Inventor提供的強大工具可有效控制和管理大型裝配設計中創建的數據，因此用戶只需專心工作在所關心的部分零部件上。 \n 10 工程圖 \n Autodesk Inventor 中包含從數字樣機中生成工程設計和製造文檔的全套工具。這些工具可減少設計錯誤，縮短設計交付時間。 \n Inventor 中的自動創建視圖功能和繪圖工具將工程圖的繪製效率提高到了新的水平。 \n 此外，Inventor還支持所有主流的繪圖標準，與 三維模型 的完全關聯（在出現設計變更時，工程圖將同步更新），以及 DWG 輸出格式，因此是創建和共享DWG工程圖的理想選擇。 \n 11 數據管理 \n Inventor 使設計數據可以高效、安全的進行交換，支持不同工程相關方（包括工業設計、產品設計和製造）之間的協作。 \n 這種功能支持設計工作組管理和跟踪一個數字樣機中的所有零部件設計，幫助他們更出色地重用關鍵的設計數據、管理BOM 表、及早實現製造團隊與客戶間的協作。 \n 通過一系列全面的本地格式轉換器， Inventor具有了出色的互操作性。 在那些有部分三維數據來源於其它CAD系統的項目中，企業也可以積極參與，並滿足客戶對於其它本地格式 三維模型 的要求。 \n \xa0 \n 12 自動化 \n Inventor 可以幫助用戶從三維軟件投資中獲得最大回報。Inventor API（應用編程接口）可以自動化常用的操作，並按照設計標準和工程流程實現特有流程的自動化。 \n 借助可編輯的樣式，用戶可以創建符合標準的工程圖，向資源中心發布自定義的零件，以確保設計者在設計中使用合適的零件，從而提高設計速度和工作效率。 \n 13 學習資源 \n Inventor 提供了豐富的學習和參考資源，旨在幫助用戶掌握使用技巧，充分發揮三維設計環境的優勢。 \n 借助Inventor ，用戶可以學習新技巧，查找關於操作流程或工具的信息，獲得最新提示和訣竅。 \n 14版本歷史 \n Autodesk Inventor R1 Mustang 1999/9/20 Autodesk Inventor R2 Thunderbird 2000/3/1 Autodesk Inventor R3 Camaro 2000/8/1 Autodesk Inventor R4 Corvette 2000/12/1 Autodesk Inventor R5 Durango 2001/9 /17 Autodesk Inventor R6 Viper 2002/10/15 Autodesk Inventor R7 Wrangler 2003/4/18 Autodesk Inventor R8 Cherokee 2003/10/15 Autodesk Inventor R9 Crossfire 2004/7/15 Autodesk Inventor R10 Freestyle 2005/4/6 Autodesk Inventor R11 Faraday 2006/4/6 Autodesk Inventor 2008 Goddard 2007/4/11 Autodesk Inventor 2009 Tesla 2008/4/16 Autodesk Inventor 2010 Hopper 2009/2/27 Autodesk Inventor 2011 Sikorsky 2010/3/26 Autodesk Inventor 2012 Brunel 2011/3/22 Autodesk Inventor Professional 2013 發佈於2012 Autodesk Inventor Professional 2014 發佈於2013 Autodesk Inventor Professional 2013 發佈於2012-06-25 Autodesk Inventor Professional 2012 發佈於2011-04-15 Autodesk Inventor Professional 2011 發佈於2010-04-23 Autodesk Inventor Professional 2010 發佈於2009-04-26 \n', 'tags': '', 'url': 'WEEK13.html'}, {'title': 'WEEK14', 'text': '運動會 \n', 'tags': '', 'url': 'WEEK14.html'}, {'title': 'WEEK15~18', 'text': '', 'tags': '', 'url': 'WEEK15~18.html'}, {'title': 'WEEK15', 'text': '這幾週做了軟體翻譯跟NX翻譯 \n \n', 'tags': '', 'url': 'WEEK15.html'}, {'title': 'WEEK16', 'text': 'week16 考試 \n \n', 'tags': '', 'url': 'WEEK16.html'}, {'title': 'WEEK17', 'text': '\n', 'tags': '', 'url': 'WEEK17.html'}, {'title': 'WEEK18', 'text': '\n', 'tags': '', 'url': 'WEEK18.html'}, {'title': 'NX電子書整理', 'text': '\n', 'tags': '', 'url': 'NX電子書整理.html'}, {'title': 'CH1 介紹', 'text': '現代製造環境的特徵在於交付範式 在不斷增加的背景下，品種不斷增加，批次更小，質量更高的產品 全球競爭。除非引進新的產業，否則它們將無法在全球競爭中生存 產品質量更高，成本更低，交付週期更短。有激烈 國際競爭和熟練勞動力的減少。隨著變化 計算能力和更廣泛的設計和生產軟件工具可用性，工程師們 現在使用計算機輔助設計（CAD），計算機輔助製造（CAM）和計算機 輔助工程（CAE）系統可使其設計和生產過程自動化。這些 現在，技術每天都用於各種不同的工程任務。下面是一個簡短的 產品期間如何使用CAD，CAM和CAE技術的說明 實現過程。 \n 1.1產品實現過程 \n \n產品實現過程可以大致分為兩個階段：設計和製造。\n設計過程從識別新客戶需求和要設計的變量開始\n改進，由營銷人員從\n顧客。一旦收集了相關的設計信息，就制定了設計規範。\n進行可行性研究並提供相關設計信息以及詳細的設計和分析\n執行。詳細設計包括設計概念化，預期產品\n圖紙，草圖和幾何建模。分析包括壓力分析，干擾\n檢查，運動學分析，質量特性計算和公差分析以及設計\n優化。從這些活動中獲得的結果的質量與\n分析的質量以及進行分析的工具。\n製造過程從生產開始的車間活動開始\n規劃，使用設計過程圖並以實際產品結束。處理\n規劃包括生產計劃，材料採購和機器等活動\n選擇。有各種各樣的任務，例如購買新工具，NC編程和質量\n在生產過程的各個階段進行檢查。流程計劃包括所有計劃 \n 產品製造中使用的過程。通過質量控制檢查的零件\n進行功能測試，包裝，貼標籤並運送給客戶。\n表示產品實現過程的圖（Ibrahim Zeid撰寫的Mastering CAD / CAM，\n麥格勞·希爾（McGraw Hill，2005）。 \n \n 1.2 CAD / CAM開發的簡要歷史 \n 當前的CAD / CAM技術的起源可以追溯到文明的開始\n古埃及的工程師認可圖形通信。正交投影實踐\n今天是在1800年代發明的。 CAD / CAM系統的真正開發始於\n1950年代。 CAD / CAM在上個世紀經歷了四個主要的發展階段。 1950年代\n被稱為交互式計算機圖形時代。麻省理工學院伺服機構實驗室\n在三軸銑床上演示了數控（NC）的概念。發展歷程\n在這個時代，由於當時計算機的缺點而放慢了速度。 1950年代後期 \n 開始開發自動編程工具（APT），並探索通用汽車公司\n互動圖形的潛力。\n1960年代是交互式計算機圖形學最關鍵的研究時期。伊万·薩瑟蘭\n開發了一個畫板系統，該系統演示了創建圖紙的可能性以及\n在陰極射線管（CRT）上以交互方式進行對象交替。 CAD一詞開始出現\n“設計”一詞超出了基本的製圖概念。通用汽車宣布了他們的\nDAC-1系統和Bell Technologies推出了GRAPHIC 1遠程顯示系統。\n1970年代，計算機圖形學的前十年研究開始\n富有成果，並實現了交互式計算機圖形在提高生產力方面的潛力\n按行業，政府和學術界。 1970年代被描述為計算機的黃金時代\n起草和特別儀器設計應用程序的開始。國家計算機\n圖形協會（NCGA）成立，並且初始圖形交換規範（IGES）\n開始了。\n在1980年代，新的理論和算法得到了發展，並且將各種設計要素整合在一起\n並發展了製造業。主要的研發重點是擴大\nCAD / CAM系統超越了三維幾何設計，提供了更多的工程設計\n應用程序。\n當前的CAD / CAM開發側重於高效，快速的集成和自動化\n設計和製造的各種要素以及新算法的開發。\n有許多商業化的CAD / CAM軟件包可用於用戶友好的直接使用\n而且非常熟練\n以下是當前市場中的一些商業軟件包。\n•Solid Edge，AutoCAD，Inventor和TurboCAD是一些負擔得起的CAD軟件\n系統。\n•NX，Pro-E，CATIA和SolidWorks是高端建模和設計軟件\n更昂貴但功能更強大的系統。這些軟件系統還具有計算機\n輔助的製造和工程分析功能。\n•Onshape和Fusion 360是基於雲的CAD軟件，可提供CAD功能\n通過用戶的瀏覽器。 \n •ANSYS，ABAQUS，NASTRAN和COMSOL是主要用於CAE的軟件包\n目的。\n 1.3 CAD / CAM / CAE的定義 \n 以下是本教程中使用的一些術語的定義。\n 1.3.1計算機輔助設計– CAD \n CAD是與使用計算機系統協助創建，修改，\n分析和優化設計。任何體現計算機圖形的計算機程序\n可以對在設計過程中促進工程功能的應用程序進行分類\n作為CAD軟件。\nCAD的最基本作用是定義設計的幾何形狀-機械零件，產品\n組裝，建築結構，電子電路，建築物佈局等。\nCAD系統的好處是可以節省大量時間並減少由\n否則，每次需要時，都必須從頭開始重新定義設計的幾何形狀。 \n \xa0 \n 1.3.2計算機輔助製造– CAM \n CAM技術涉及計劃，管理和控制製造的計算機系統\n通過計算機界面與工廠的生產資源進行操作。\nCAM最重要的領域之一是數控（NC）。這是使用的技巧\n用於控制機床的程序化指令，該機床可以進行原始的切削，銑削，磨削，沖壓或車削\n庫存成成品。 CAM的另一個重要功能是在機器人編程中。\n流程計劃也是計算機自動化的目標。 \n \xa0 \n 1.3.3計算機輔助工程– CAE \n CAE技術使用計算機系統來分析CAD創建的產品的功能，\n允許設計師模擬和研究產品的行為，以便設計\n完善和優化。\nCAE工具可用於許多不同類型的分析。例如運動學\n分析程序可用於確定機構中的運動路徑和連桿速度。\n動態分析程序可用於確定複雜結構中的載荷和位移\n裝配，例如汽車。最受歡迎的分析方法之一是使用有限 \n 元素方法（FEM）。該方法可用於確定應力，變形，傳熱，\n磁場分佈，流體流動以及其他通常很難解決的連續磁場問題\n用其他方法解決。 \n \xa0 \n 1.4。本教程的範圍 \n 本教程是為有興趣學習如何使用NX 12的學生和工程師編寫的\n用於設計機械零件和組件。學習使用NX 12也將很有價值\n學習如何使用其他CAD系統，例如PRO-E和CATIA。本教程提供了\n學習NX 12的系統方法。\n第2章介紹了從開始會話到熟悉NX的NX 12基本知識。\n通過練習基本功能（如打印，保存和退出）來佈局12。它還給出了簡短的描述\n坐標系，圖層，各種工具箱和其他重要命令\n在後面的章節中使用。\n第3章介紹了素描的概念。它描述瞭如何創建草圖並給出\n幾何和尺寸約束。從今天開始，這一章非常重要\n組件的幾何形狀非常複雜，僅憑基本特徵很難建模。\n零件的實際設計和建模始於第4章。它描述了不同的功能\n例如參考特徵，掃描特徵和原始特徵，以及如何使用這些特徵\n創建設計。對特徵執行各種特徵操作。\n您將在第5章中學習如何從零件模型創建工程圖。在本章中，我們將\n通過添加視圖，標註零件圖紙尺寸來演示如何創建圖紙，以及\n修改圖形中的各種屬性，例如文本大小，箭頭大小和公差。\n第6章介紹了裝配建模的概念及其術語。它描述了TopDown建模和Bottom-Up建模。我們將使用自下而上的模型進行組裝\n組件變成產品。\n第7章介紹了自由格式建模。曲線和平滑曲面的建模方法\n將被演示。\n第8章概述了NX 12中提供的Design Simulations的簡要介紹。\n有限元分析。 \n 第9章將是在製造中實施設計模型的實時經驗\n加工環境。本章介紹工具的生成，驗證和模擬\n創建CNC（計算機數字代碼）以從多軸生產設計零件的路徑\n甚至先進的CNC機器。\n每章中使用的示例和練習問題都經過精心設計，以使它們最終得以應用\n組裝在本章中。由於這項獨特的功能，您應該保存所有的模型\n在每一章中都有創建。 \n \n', 'tags': '', 'url': 'CH1 介紹.html'}, {'title': 'CH2入門教學', 'text': '這個章節介紹的是 NX12 的相關基礎說明，學習開始，理解和使用於建模，製圖等的 NX12 軟件包。它包含五個小節： \n 1. 打開 NX 12 ， 2. 列印，保存和關閉零件文件， 3. 熟悉 NX 12 用戶界面， 4. 使用圖層， 5. 了解重要的命令和對話框。 \n \xa0 2.1 \xa0 打開 NX12 並打開文件 \n \xa02.1.1 開啟 NX12 \n 在 Windows 桌面屏幕上，單擊開始→程序列表→ Siemens NX 12 →NX 12 \n \n 2.1.2 開啟新檔案 \n ➢ 按新增按鈕 (這在左上) or 按 Ctrl+ N \n 這將打開一個新視窗，詢問要創建的新文件的類型，名稱和位置。NX 12中有多種文件類型，可從位於以下位置的“模板”對話框中選擇窗口的中心。所選文件的屬性顯示在“預覽”下右邊。由於我們要在建模環境中工作並創建新零件，因此僅指定工作環境的單位（英寸或毫米）以及名稱和位置文件。默認單位是毫米。 \n ➢輸入文件的適當名稱和位置，然後單擊“確定”。 \n \n 2.1.3打開零件文件 \n ➢單擊屏幕頂部的打開 (open) 或打開最近的零件按鈕 (open a Recent part) ➢按 Ctrl+O \n 將顯示 “ 打開零件文件 ” 對話框。您可以在右側查看文件預覽 窗口。您可以通過取消單擊 “ 預覽 ” 按鈕前面的框來禁用 “ 預覽 ” 。 \n ➢點擊取消退出窗口 \n \n 2.2 列印，保存和關閉文件 \n 2.2.1 列印NX12圖像 \n ➢ 按下檔案(File) →列印(Print) \n 2.2.2 保存零件文件 \n 必須經常保存工作。如果由於某些原因，NX 12會關閉，而零件沒有保存後，所有工作都會丟失。要保存零件文件。 \n ➢ 按下檔案(File)→儲存(Save) \n 有五個選項可以保存文件： \n 1.儲存 : \xa0 創建零件文件時，此選項將使用與以前相同的名稱將零件保存在屏幕上。 \n 2.僅保存工作零件: 此選項僅將活動部件保存在屏幕上。 \n \xa03. 另存為 : \xa0 此選項使您可以使用其他名稱和 / 或類型將零件保存在屏幕上。默認類型是.prt. 但是，您可以將文件另存為 IGES (.igs), STEP 203 (.stp), STEP 214 (.step),AutoCAD DXF (.dxf), AutoCAD DWG (.dwg), CATIA Model (.model) and CATIA V5 (.catpart). \n \xa04. 保存全部 : \xa0 全部保存此選項將使用現有名稱保存所有打開的零件文件 \n \xa05. 保存書籤 : 保存書籤此選項會將屏幕快照和當前模型的上下文保存為 .JPEG 文件和書籤。 \n 2.3 \xa0 NX12 介面 \n 通過使用不同的圖標，NX 12的用戶界面變得非常簡單。大部分的可以通過在屏幕上導航鼠標並單擊圖標來執行命令。鍵盤輸入主要限於輸入值和命名文件。 \n 2.3.1 鼠標功能 \n 2.3.1.1 滑鼠左鍵 (MB1) \n 鼠標左鍵（在NX中稱為鼠標鍵1（MB1））用於選擇圖標，菜單，和圖形屏幕上的其他實體。在任何功能上雙擊MB1都會自動打開“編輯對話框”。單擊對像上的MB1，使用戶可以快速訪問如下所示的幾個選項。 \n \n 2.3.1.2 滑鼠中鍵 (MB2) \n 鼠標中鍵（MB2）或滾動按鈕用於通過按下來旋轉對象，按住並拖動。模型也可以繞單個軸旋轉。繞軸旋轉垂直於屏幕，將鼠標指針放在圖形屏幕的右邊緣附近，然後旋轉。同樣，對於垂直軸和垂直於屏幕的軸，單擊底部屏幕的上邊緣和上邊緣分別旋轉。如果您同時按住MB2位置幾秒鐘，它將固定旋轉點（出現橙色圓圈符號）您可以在對象周圍拖動以查看 \n 如果是滾動按鈕，則可以通過滾動對象來放大和縮小。單擊 MB2 將 \n 如果打開了任何彈出窗口或對話框，還可以執行“確定”命令。 \n \n 2.3.1.2 滑鼠右鍵 (MB3) \n MB3或鼠標右鍵用於訪問用戶界面彈出窗口菜單。您可以訪問後續彈出的選項取決於選擇模式和應用。的下圖顯示在Sketch中應用。單擊MB3時選擇功能將提供選項與該功能有關（對象/動作菜單）。 \n \n 單擊MB3並按住按鈕將在功能周圍顯示一組圖標。 \n 這些圖標帶有可應用於功能的可能命令。 \n \n 2.4 \xa0 圖層 \n \xa0 \n 圖層用於將對象存儲在文件中，並像容器一樣工作以將對象收集到文件中。 \n 有條理和一致的方式。與簡單的視覺工具（例如顯示和隱藏）不同，圖層提供 \n 一種永久的方式來組織和管理文件中對象的可見性和選擇性。 \n 2.4.1 圖層控制 \n 使用 NX 12 ，您可以使用“圖層”控制對像是可見還是可選。一層是 \n NX 12中所有對象必須具有的系統定義的屬性，例如顏色，字體和寬度。那裡 \n NX 12中有 256 個可用層，其中之一始終是工作層。 \n 工作層是在其上創建對象的層，並且始終可見並且可以選擇，而它仍然是工作層。啟動新零件文件時，第 1 層是默認的工作層。當工作層更改為另一種類型的層時，先前的工作層將自動變為“可選”，並且可以然後將其分配為“僅可見”或“不可見”狀態。可以在一層上的對像數量不受限制。您可以自由選擇要創建的圖層對象及其所在層的狀態。要將狀態分配給一個或多個圖層。 \n ➢選擇查看→圖層設置 \n 但是，應該注意的是，在關於層將有利於保持一致性文件之間。 \n \n 2.5 \xa0 座標系統 \n NX中有不同的坐標系。三軸符號用於辨認坐標系。 \n 2.5.1 絕對座標系統 \n 絕對坐標係是從 所有對像都被引用。這是一個固定的坐標系， \xa0 NX 12 建模空間中每個對象的位置和方向是 與這個系統有關。絕對坐標系（或 絕對 CSYS ）還提供了通用的參考框架 零件文件。一個零件文件中 X = 1 ， Y = 1 和 Z = 1 的絕對位置是 任何其他零件文件中的相同位置 \n \xa0 \n 圖形窗口左下角的View Triad僅是視覺對象代表絕對坐標系方向的指示器模型的 \n \n 2.6\xa0 工具欄 \n 工具欄包含圖標，可作為許多功能的快捷方式。右圖正常顯示了工具欄的主要項目 \n 顯示。但是，您可以找到更多不同圖標功能命令，基於所選模塊以及如何模塊是定制的。\xa0 \n ➢右鍵單擊 現有工具欄上的任何位置，都會列出其他工具欄。您可以通過選中添加任何工具欄。 \n \n 通常，默認設置對於大多數操作應該是足夠的，但是在某些操作期間， \n 您可能需要其他工具欄。如果要添加與命令有關的按鈕，工具欄 \n ➢單擊任何工具欄上的下拉箭頭，然後選擇“自定義”。 \n \n 這將彈出一個“自定義”對話框窗口，其中包含所有與命令標籤下的每個工具欄。要添加命令， \n ➢選擇一個類別，然後將命令從“命令”列表中拖動到所需位置。 \n \n 您可以通過以下方式自定義NX 12界面的設置單擊資源欄上的“角色”選項卡。 \n 角色選項卡具有工具欄菜單的不同設置顯示在NX 12界面上。它可以讓你自定義您希望在工具欄中顯示的工具欄介面。 \n \n CH1 NX介紹 << \xa0 Previous \xa0 Next \xa0 >> CH3 平面草圖 \n \n', 'tags': '', 'url': 'CH2入門教學.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};