var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '影片', 'text': '\n', 'tags': '', 'url': '影片.html'}, {'title': 'ag2', 'text': '', 'tags': '', 'url': 'ag2.html'}, {'title': '四輪小車', 'text': '參考尺寸 \n \n 建模 \n 避震器 \n \n 下車殼 \n \n 斜齒輪 \n \n \n', 'tags': '', 'url': '四輪小車.html'}, {'title': '翻譯文件', 'text': '', 'tags': '', 'url': '翻譯文件.html'}, {'title': 'IndustrialAndEngineeringProductDesignCollaboration', 'text': '3.討論與啟示 \n 3.1角色變更 \n 工業設計師在設計階段占主導地位，工程設計師則是後續的角色，除了第3類型的設計過程以外，其他都是工業設計師提出設計概念開始的，對於1、2類型是由工業設計師依據形狀定義設計概念及使用，第4種類型在設計概念階段是集成方式，但是是由工業設計師擬定最初的設計理念。與其他三種不同第3類型是對現有產品進行修改，此種類型是由工程設計師進行布局及設計。綜上所述可發覺工業設計師為概念開發者，而工程設計師則為概念實現者，在開發新產品或重新設計時設計師是很重要的角色，設計產品新的用途及含義也可看作新技術從現有技術及原理開始的證據。 \n 關於工業設計師的知識，並不會很少考慮內部零件，他們有足夠的知識處裡內部功能組件並顧及外部功能設計。除了第1類型定義外部形狀總是通過工業設計師考慮及重新布置內部功能部件，第2類型則是特別情況。工業設計師通過內部直接影響到外型的零件去設計外型，但不會參與設計內部零件，但零件的作用影響到工程設計領域，兩項能整合即是歸功於高層管理的支持及兩組間共享的CAD工具 \n 3.2選擇設計方法 \n 理論上”由內而外”和”由外而內”這兩個方法結合工程設計師不同的工作習慣和工業設計師的4個協作設計過程可看作兩個方法，本張籍是討論這四個類型和兩種方法之間的關係，及成功應用每個類型的條件，並將其應用於顧問和客戶合作夥伴。\xa0 \n 對於強調使用環境的產品工業設計師應該先定義外觀，再由工程設計師設計確定內外部功能零件鏈接，這是由外而內的方法，其中第1、2類型幾乎適用此種方法，第3類型就是將內外流程定義為初步布局用其開發外部及後續一起設計的一種案例，第4類型則為混合過程，他考慮到兩種方法，因為內外皆已經決定，若將內部布局定義為”由內而外”，則此方法較不適合消費產品，但適合工業耐用商品。 \n 使用第1類型時，工業設計師可以自由提出創新的設計思路，但該方法將導致兩個問題： \n 1.很難獲得工程技術性能。為了獲得最佳性能，內部功能部件可能會與外形衝突。 \n 2.為了解決第一個問題，設計團隊可能會通過在功能和外觀之間進行權衡來折衷原始設計概念。 \n 為了成功運用此方法，當折衷方案發生時，高層管理人員必須給予強大的支持以保持設計的創新性。我們在B公司中觀察到，類型2可以替代這些問題。它的策略是，工業設計師在移動或放置相關內部零件時確定外觀形式。這避免了內部和外部之間的嚴重干擾。但有爭議的是，工業設計師是否應在外觀設計開發之外還進行內部佈局設計，但他們可能會在自己的知識範圍內而折衷創新。因此要成功應用第2類型，設計師應該對工業設計和工程設計都非常了解。 \n 為了在早期階段實現高階設計概念的可行性，類型4特別的是工業設計師的概念和工程設計師的技術合力進行新產品開發。此過程很有效不過開發創新產品的公司需要適當的工作條件，眾所周知，戴森公司之所以可以成為榜樣，就是因為實施設計師和工程師作為一個部門的成員共享一個工作區，在此過程中，公司需要有一個由兩個小組共享一個工作空間並按預期吸收每個學科的文化。更重要的是激發設計師挑戰性的組織文化，並願意一起工作。如果設計師擔心失敗而產生公司的罰款，他們將更加保守。若沒有這種情況的改變，即使在公司中有據可查的流程也無法有效地處理第4類型的工作。 \n 在行業中，許多工程公司與外部工業設計師合作。儘管我們沒有調查這種類型的協作，但是，根據我們的發現對可能的流程方案進行討論將是有益的。當製造商與設計諮詢公司合作時，他們可以得到支持，以按時完成項目或產生新的想法（Bruce＆Morris，1994）。在顧問和客戶合作關係中，有兩種過程耦合方式： \n 1.被動耦合，其中顧問在與客戶聯繫以獲取更多信息或查看其結果時獨立開發解決方案。 \n 2.主動耦合，其中顧問和客戶設計師的協作團隊密切合作生成解決方案（Gericke＆Maier，2011年）。 \n 在被動耦合中，由於外部設計師獨立工作，其設計過程將類似於類型1或類型2。當客戶希望利用他們缺少的特定專業來收集盡可能多的創意時，類型1將非常有用。當客戶公司高度以技術為導向並且有足夠的能力在強大的工程支持下實施好的概念時，這種情況將很有幫助。如果客戶的能力比上述情況要小，並且在初期需要聘請外部工業設計師來領導其產品開發，此狀態下較適合類型2。主動耦合模式將具有與類型3和類型4相似的過程。當客戶已經具有良好的設計方向和相關技術，並且想要改善產品的美學外觀時比較適合類型3。除非客戶和顧問公司的整合團隊在項目期間在同一空間工作，否則類型4是不可能的。在顧問和客戶合作夥伴的協作設計過程中應該考慮其他因素。在許多情況下，客戶為顧問提供的信息受到限制。因此，顧問和客戶合作夥伴以及公司內部發生的相同類型的協作過程在內容方面將是不同的。儘管如此，我們的研究結果和討論仍可為在消費電子領域選擇更好的設計方法提供線索。 \n \xa03.設計過程類型的含義 \n 工業設計師和工程設計師在設計方法和關於產品開發的觀點上是不同的（Eder，2013； Pahl等，2007； Ulrich＆Eppinger，2012）。工業設計師產生以用戶為中心的解決方案概念，工程設計師根據技術角度解決設計問題。這兩個群體的專業所面臨的過程可能是開發具有競爭力的創新產品的基礎。此外，系統工程設計和以用戶為中心的設計思想的耦合過程對於在顧問與客戶之間的關係中生成以用戶為中心的解決方案是有益的（Gericke＆Maier，2011）。耦合過程是公司採取並實現市場競爭力的最佳選擇。例如，消費電子公司使用四種類型的協作設計過程來實現其市場目標。工業設計師在這四種類型的早期階段中的作用是顯而易見的，採用工業設計師專業的方式是採用適當類型的協作設計過程的重要因素。通過給予類型1中的工業設計師自由，可以增加獲得創新設計概念的可能性。那麼，這種自由如何驅動工業設計師創建創新設計概念呢？實際上，建築和工業設計師首先從解決方案的圖像入手，然後通過重複試驗最終確定（Lawson，2006； Roozenburg＆Cross，1991）。這與一個模型有關，在該模型中，設計人員首先基於預設進行推測，然後進行分析（Hillier等，1972）。這意味著工業設計師依靠對未來的展望來創造創新的概念，而不是對市場和客戶進行深入的設計研究。 Press and Cooper（2003）補充說，工業設計方法是價值驅動的。因此，類型1的工業設計師可以不受約束，可以通過設想所需的未來產生創意。 \n \xa0Norman和Verganti（2014）認為，創新產品開發是通過技術或含義的改變進行的，而不是以人為中心的認真的設計研究。他們補充說，以人為本的設計方法更適合於改進現有產品。在消費電子領域當前的產品開發環境中，產品規劃專家在市場和客戶研究中起著關鍵作用。因此，產品規劃團隊對工業設計師的投入將僅限於他們的創造力。這解釋了為什麼公司以相反的方式使用類型1；首先開發概念，然後再定義市場，而不是相反。通常，在產品設計概念中，設計師會考慮與技術高度相關的功能概念，以及會給用戶帶來新含義的樣式概念（Baxter，1995年）。因此，由於功能和樣式概念，工業設計師提出的設計概念應該是創新的。當涉及到技術時，工程設計師應開發新技術或尋找適當的技術來實施該概念。如果在產品開發計劃階段沒有被拒絕，這種類型的過程將促進新技術的開發。 \n \xa0如果我們考慮將類型2和類型3用於重新設計，那麼類型2何時比類型3更好？類型3的特性符合工程設計中大多數設計過程。工業設計被認為是工程設計領域的事後考慮（例如Andreasen＆Hein，2000； Hubka＆Eder，1987； Pahl等，2007）。按照他們的觀點，工業設計的功能與產品外觀的各個方面有關，例如確定產品特徵的樣式、形式和顏色。類型3是工程設計師為設計概念提供技術解決方案的過程。他們要求工業設計師開發外觀。因此，類型3僅使用工業設計師的部分專業知識來創造美學外觀。從這個角度來看，類型2比類型3可以為工業設計師提供更多的方式來展示其專業知識。考慮到類型3是最常用的過程，因此在過程管理方面可以更加有效。類型3早期階段的不確定性可能是四種類型中最小的。設計概念的大多數技術解決方案都是由工程設計師在早期階段製定的，而工業設計師僅受限於創造美觀外觀。 \n \xa0我們找不到的一個過程是類型5：ED主導的技術驅動過程。這可以與類型1：由ID主導的概念驅動過程形成對比。在類型5中，工程設計人員將首先開發一項新技術而無需考慮產品開發計劃，並使用測試原型來測試其性能。接下來，工業設計師為該技術產生新的產品設計概念。然後可視化設計概念和原型用於決定產品開發。應用類型5，公司可以創建新類別的產品，從而增加打開新市場的可能性。我們無法找到這種類型的原因之一是創新技術開發的稀缺，以及新技術滿足新概念的難得機會。另外，在決定產品開發之前，公司不太可能等不確定的工程設計師和工業設計師。為了使此過程更好，我們需要工程設計師開發新技術，需要工業設計師使用相互合作的技術創建新概念。根據這一論點，類型4在正式用於創新產品設計時會很有用。它可以使工程設計師開發的技術與工業設計師提出的新概念集成在一起。 \n \n 結論 \n \n 我們在確定協作設計過程類型的存在以及在公司中採用特定類型的條件。我們根據工業設計師和工程設計師的深入訪談數據建立了協作設計流程。結果我們發現了四種類型的協作設計過程。 根據設計過程早期階段的不同對它們進行分類。 四種類型的過程在不同的上下文中用於不同的目的。 有時它們會被戰略性地用於開發新設計或重新設計，有時它們會由於內部和外部因素而有機地應用。 我們還發現，工業設計師的作用是有影響力的，而且是擴展的。 \n \xa0設計過程模型的抽象特徵和研究中的一門學科方法與實際實踐並不完全匹配，在這方面，有人要求結合不同的設計過程模型（Albers，2010； Dorst，2008）被確定為造成這種問題情況的原因（Brooks Jr，2010； Eckert＆Clarkson，2005）。。四種類型的過程是工業設計師驅動的以解決方案為導向的方法和工程設計師以問題為導向的方法的組合過程。它們表明，即使在單個領域（即消費類電子產品）中，實際的設計過程也無法用單個模型來表示。為了提高設計過程的適用性並在設計實踐中獲得設計方法的適當支持，需要考慮公司和項目具體環境的更為具體的過程模型（Finkelstein＆Finkelstein，1983； Gericke＆Blessing，2011）。我們特別專注於消費電子領域，在這一領域中，工業設計師和工程設計師在產品開發中起著重要的合作作用。我們發現了四種類型的設計過程，並確定了它們的目的和背景。因此，我們發現的有關上下文的詳細信息將為計劃進行新產品開發的有效設計過程管理的公司提供有用的信息 \n \xa0根據研究方法，我們展示如何從設計師的深入訪談數據中建立協作設計過程。我們確定了過程元素，並使用它們構造了部分過程，並使用鑲嵌方法建立了詳細的協作設計過程。我們還引入了“過程塊”，並定義了一個或兩個交互塊作為一個階段。我們認為這種方法有利於確定最佳水平的實際設計過程。我們的過程模型的形式與其他基於階段的模型相比較（例如French，1998； Pahl等，2007），我們發現，在階段之間很少發生反向迭代或反饋。這與現有的基於階段的工程設計過程模型的描述不同。在理想情況下，我們認為雙向迭代是可能的，但是實際上由於激烈的市場競爭，我們認為這種情況很少發生。 \n \xa0特別是針對其他產品領域中的其他項目案例，需要對該方法進行進一步的研究。 本研究中的公司均為電子產品製造商。 因此，結果僅限於此產品類別。 我們需要測試這四個協作設計過程如何在其他公司中應用。 相反，值得研究創新產品開發和應用過程的案例。 \n', 'tags': '', 'url': 'IndustrialAndEngineeringProductDesignCollaboration.html'}, {'title': '直播參與', 'text': 'https://s40723150.github.io/cd2020ag2/content/%E5%88%86%E7%B5%84%E8%A8%8E%E8%AB%96%E7%B4%80%E9%8C%84.html', 'tags': '', 'url': '直播參與.html'}]};