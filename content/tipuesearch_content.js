var tipuesearch = {"pages": [{'title': 'WEEK', 'text': '\n \n \n WEEK2~5 \n WEEK6~9 \n \n \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK2~5', 'text': 'WEEK2 \n \n 在自己的git hub建立新倉儲 cad2019 ，並且到mde.tw下載2019Fall可攜套件.7z \n 使用git config --global user.name "user name"與git config --global user.email " user email " 設定自己的名字與email \n 使用git submodule add新的指令 指令如下 ( git submodule add https://github.com/mdecourse/cmsimde.git cmsimde ) \n 輸入指令python -m pip install flask cors \n \n 開啟近端開始更新內容，更新完成使用一上所使用的 git指令(git status、git pull ..... )\xa0 \n WEEK3 \n Solvespace 編譯 \n 編譯步驟: 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone https://github.com/solvespace/solvespace.git \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行. \n \n WEEK4 \n 沒進度 \n WEEK5 \n solvespace的基本操作練習 \n 這次所畫的圖是\xa0Solvespace Tutorial 4 - Assembly \n', 'tags': '', 'url': 'WEEK2~5.html'}, {'title': 'WEEK6~9', 'text': 'WEEK6 \n 1.到課程網站中解壓縮web_vrep2與V-REP3 \n 2.打開V-REP3內的應用程式 \n 3.導入web_vrep2的two_wheeler.ttt檔案 \n 4.打開web_vrep2內的app.py按下GO \n 5.複製網址打開網頁 \n 6.操作車子 \n \n WEEK7 \n \n WEEK8 \n \n', 'tags': '', 'url': 'WEEK6~9.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};