"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1401],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>k});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)o=p[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)o=p[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(o),c=n,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||p;return o?a.createElement(k,r(r({ref:t},m),{},{components:o})):a.createElement(k,r({ref:t},m))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,r=new Array(p);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,r[1]=i;for(var s=2;s<p;s++)r[s]=o[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},54113:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const p=o.p+"assets/images/skippy_chatbot-01e93d7bda29d973a0663fc8f9eea57b.png",r=o.p+"assets/images/skippy_chatbot_header-378e21014fb7ee1923ce415b4475290b.png",i=o.p+"assets/images/therapy_chatbot-5c8c653e12e16fc816883ff38f27e9b2.gif",l=o.p+"assets/images/chatgpt_ui_diagram-87b55966a74fe72526d9e2c4b86c6650.png",s={sidebar_position:4},m="\ud83d\udfe2 Sestavit ChatGPT z GPT-3",u={unversionedId:"applied_prompting/build_chatgpt",id:"applied_prompting/build_chatgpt",title:"\ud83d\udfe2 Sestavit ChatGPT z GPT-3",description:"\xdavod",source:"@site/docs/applied_prompting/build_chatgpt.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatgpt",permalink:"/Learn_Prompting_CAI/docs/applied_prompting/build_chatgpt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u0158e\u0161en\xed diskusn\xedch ot\xe1zek",permalink:"/Learn_Prompting_CAI/docs/applied_prompting/short_response"},next:{title:"\ud83d\udfe2 Chatbot + znalostn\xed b\xe1ze",permalink:"/Learn_Prompting_CAI/docs/applied_prompting/build_chatbot_from_kb"}},d={},c=[{value:"\xdavod",id:"\xfavod",level:2},{value:"Motivace",id:"motivace",level:2},{value:"Prompt",id:"prompt",level:2},{value:"Zapamatov\xe1n\xed",id:"zapamatov\xe1n\xed",level:3},{value:"N\u011bkolik p\u0159\xedklad\u016f",id:"n\u011bkolik-p\u0159\xedklad\u016f",level:3},{value:"Terapeutick\xfd chatbot, kter\xfd se pt\xe1 na v\xe1\u0161 den.",id:"terapeutick\xfd-chatbot-kter\xfd-se-pt\xe1-na-v\xe1\u0161-den",level:4},{value:"Promluvte si se sv\xfdm mlad\u0161\xedm j\xe1 pomoc\xed star\xfdch z\xe1znam\u016f v den\xedku.",id:"promluvte-si-se-sv\xfdm-mlad\u0161\xedm-j\xe1-pomoc\xed-star\xfdch-z\xe1znam\u016f-v-den\xedku",level:4},{value:"Implementace",id:"implementace",level:2}],k={toc:c},v="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(v,(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-sestavit-chatgpt-z-gpt-3"},"\ud83d\udfe2 Sestavit ChatGPT z GPT-3"),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:r,style:{width:"700px"}})),(0,n.kt)("h2",{id:"\xfavod"},"\xdavod"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT")," vylet\u011bl do pov\u011bt\u0159\xed a za pouh\xfd t\xfdden z\xedskal milion u\u017eivatel\u016f. P\u0159ekvapiv\xe9 je, \u017ee z\xe1kladn\xed model, GPT-3, debutoval v roce 2020 a byl p\u0159\xedstupn\u011bn pro \u0161irokou ve\u0159ejnost ",(0,n.kt)("a",{href:"https://openai.com/blog/api-no-waitlist/"},"p\u0159ed v\xedce ne\u017e rokem!"),".   "),(0,n.kt)("p",null,"Pro ty, kte\u0159\xed to nev\u011bd\xed, ChatGPT je jazykov\xfd model od OpenAI, kter\xfd byl vylad\u011bn z GPT-3 tak, aby byl optimalizov\xe1n pro konverzaci",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". M\xe1 u\u017eivatelsky p\u0159\xedv\u011btiv\xe9 rozhran\xed chatu, kde m\u016f\u017eete zad\xe1vat vstupy a dost\xe1vat odpov\u011bdi od asistenta AI. Pod\xedvejte se na n\u011bj na ",(0,n.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"chat.openai.com"),". "),(0,n.kt)("p",null,"Ran\xe9 verze GPT-3 sice nebyly tak pokro\u010dil\xe9 jako sou\u010dasn\xe1 \u0159ada GPT-3.5, ale i tak byly p\u016fsobiv\xe9. Tyto modely byly k dispozici prost\u0159ednictv\xedm API a ",(0,n.kt)("a",{href:"https://beta.openai.com/playground"},"playgroundu s UI rozhran\xedm"),", kter\xe9 umo\u017e\u0148uje vyladit n\u011bkter\xe9 konfigura\u010dn\xed hyperparametry a testovac\xed prompty. GPT-3 si z\xedskal zna\u010dnou oblibu, ale viralit\u011b ChatGPT se nep\u0159ibl\xed\u017eil. "),(0,n.kt)("p",null,"To, co \u010din\xed ChatGPT tak \xfasp\u011b\u0161n\xfdm, ve srovn\xe1n\xed s GPT-3, je jeho p\u0159\xedstupnost jako p\u0159\xedmo\u010dar\xe9ho asistenta um\u011bl\xe9 inteligence pro b\u011b\u017en\xe9ho \u010dlov\u011bka bez ohledu na jeho znalosti datascience, jazykov\xfdch model\u016f nebo um\u011bl\xe9 inteligence.  "),(0,n.kt)("p",null,"V tomto \u010dl\xe1nku pod\xe1v\xe1m p\u0159ehled o tom, jak lze chatboty, jako je ChatGPT, implementovat pomoc\xed velk\xe9ho jazykov\xe9ho modelu, jako je GPT-3."),(0,n.kt)("h2",{id:"motivace"},"Motivace"),(0,n.kt)("p",null,"Tento \u010dl\xe1nek byl \u010d\xe1ste\u010dn\u011b naps\xe1n kv\u016fli tweetu ",(0,n.kt)("a",{href:"https://twitter.com/goodside"},"Riley Goodside")," o tom, jak by mohl b\xfdt ChatGPT implementov\xe1n."),(0,n.kt)("blockquote",{class:"twitter-tweet"},(0,n.kt)("p",{lang:"en",dir:"ltr"},"How to make your own knock-off ChatGPT using GPT\u20113 (text\u2011davinci\u2011003) \u2014 where you can customize the rules to your needs, and access the resulting chatbot over an API. ",(0,n.kt)("a",{href:"https://t.co/9jHrs91VHW"},"pic.twitter.com/9jHrs91VHW")),"\u2014 Riley Goodside (@goodside) ",(0,n.kt)("a",{href:"https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw"},"December 26, 2022"))," ",(0,n.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,n.kt)("p",null,"Stejn\u011b jako ostatn\xed modely \u0159ady GPT-3.5 byl ChatGPT vycvi\u010den pomoc\xed ",(0,n.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/rlhf"},"RLHF"),", ale jeho \xfa\u010dinnost z velk\xe9 \u010d\xe1sti vych\xe1z\xed z pou\u017eit\xed ",(0,n.kt)("strong",{parentName:"p"},"dobr\xe9ho promptu"),"."),(0,n.kt)("h2",{id:"prompt"},"Prompt"),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:p,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Cel\xfd prompt chatbota Skippy z nadpisu \u010dl\xe1nku")),(0,n.kt)("a",{href:"/Learn_Prompting_CAI/docs/basics/prompting"},"Prompting je proces zad\xe1v\xe1n\xed pokyn\u016f um\u011bl\xe9 inteligenci, aby n\u011bco ud\u011blala. ")," Jak jste pravd\u011bpodobn\u011b vid\u011bli v p\u0159\xedkladech ChatGPT na internetu, m\u016f\u017eete jej pob\xeddnout k t\xe9m\u011b\u0159 \u010demukoli. Mezi b\u011b\u017en\xe9 p\u0159\xedpady pou\u017eit\xed pat\u0159\xed shrnut\xed textu, psan\xed obsahu na z\xe1klad\u011b popisu nebo vytv\xe1\u0159en\xed v\u011bc\xed, jako jsou b\xe1sn\u011b, recepty a mnoho dal\u0161\xedch.",(0,n.kt)("p",null),(0,n.kt)("p",null,"ChatGPT je jazykov\xfd model i u\u017eivatelsk\xe9 rozhran\xed. Prompt zadan\xfd u\u017eivatelem do rozhran\xed je ve skute\u010dnosti vlo\u017een do v\u011bt\u0161\xedho promptu, kter\xfd obsahuje celou konverzaci mezi u\u017eivatelem a ChatGPT. To umo\u017e\u0148uje jazykov\xe9mu modelu pochopit kontext konverzace a vhodn\u011b reagovat."),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:l,style:{width:"600px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"P\u0159\xedklad vlo\u017een\xed promptu u\u017eivatele p\u0159ed odesl\xe1n\xedm modelu")),(0,n.kt)("p",null,"Jazykov\xfd model dopln\xed prompt tak, \u017ee na z\xe1klad\u011b pravd\u011bpodobnost\xed, kter\xe9 se nau\u010dil b\u011bhem p\u0159edtr\xe9nov\xe1n\xed, zjist\xed, jak\xe1 slova budou n\xe1sledovat",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,n.kt)("p",null),(0,n.kt)("p",null,'GPT-3 se dok\xe1\u017ee "u\u010dit" z jednoduch\xe9ho pokynu nebo n\u011bkolika p\u0159\xedklad\u016f v promptu. Ten posledn\xed se naz\xfdv\xe1 n\u011bkolikan\xe1sobn\xe9 nebo kontextov\xe9 u\u010den\xed',(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". Ve v\xfd\u0161e uveden\xe9m promptu vytvo\u0159\xedm fiktivn\xedho chatbota jm\xe9nem Skippy a d\xe1m mu pokyn, aby u\u017eivatel\u016fm poskytoval odpov\u011bdi. GPT-3 zachyt\xed form\xe1t zp\u011btn\xe9ho dotazu: ",(0,n.kt)("inlineCode",{parentName:"p"},"USER: {vstup u\u017eivatele}")," a ",(0,n.kt)("inlineCode",{parentName:"p"},"SKIPPY: {v\xfdstup skippy}"),'. GPT-3 ch\xe1pe, \u017ee Skippy je chatbot a p\u0159edchoz\xed v\xfdm\u011bny jsou konverzac\xed, tak\u017ee kdy\u017e zad\xe1me dal\u0161\xed u\u017eivatelsk\xfd vstup, "Skippy" odpov\xed.'),(0,n.kt)("h3",{id:"zapamatov\xe1n\xed"},"Zapamatov\xe1n\xed"),(0,n.kt)("p",null,"P\u0159edchoz\xed v\xfdm\u011bny mezi Skippy a u\u017eivatelem se p\u0159ipoj\xed k dal\u0161\xedmu promptu. Poka\u017ed\xe9, kdy\u017e zad\xe1me dal\u0161\xed u\u017eivatelsk\xfd vstup a z\xedsk\xe1me dal\u0161\xed v\xfdstup chatbota, prompt se roz\u0161\xed\u0159\xed o tuto novou v\xfdm\u011bnu. T\xedmto zp\u016fsobem si chatboti jako Skippy a ChatGPT mohou ",(0,n.kt)("strong",{parentName:"p"},"zapamatovat p\u0159edchoz\xed vstupy.")," Existuje v\u0161ak omezen\xed, kolik si toho chatbot GPT-3 m\u016f\u017ee zapamatovat."),(0,n.kt)("p",null,"Prompty mohou b\xfdt po n\u011bkolika v\xfdm\u011bn\xe1ch masivn\xed, zejm\xe9na pokud chatbota pou\u017e\xedv\xe1me k vytv\xe1\u0159en\xed dlouh\xfdch odpov\u011bd\xed, jako jsou nap\u0159\xedklad p\u0159\xedsp\u011bvky na blogu. Prompty zaslan\xe9 do syst\xe9mu GPT-3 se p\u0159ev\xe1d\u011bj\xed na tokeny, co\u017e jsou jednotliv\xe1 slova nebo jejich \u010d\xe1sti. Pro modely GPT-3, v\u010detn\u011b ChatGPT, je stanoven limit ",(0,n.kt)("a",{href:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"},"4097 token\u016f (p\u0159ibli\u017en\u011b 3000 slov v angli\u010dtin\u011b)")," pro sou\u010det token\u016f v promptu a generovan\xe9 odpov\u011bdi. "),(0,n.kt)("h3",{id:"n\u011bkolik-p\u0159\xedklad\u016f"},"N\u011bkolik p\u0159\xedklad\u016f"),(0,n.kt)("p",null,"Existuje mnoho r\u016fzn\xfdch p\u0159\xedpad\u016f pou\u017eit\xed prompt\u016f chatbot\u016f, kter\xe9 ukl\xe1daj\xed p\u0159edchoz\xed konverzace. ChatGPT m\xe1 b\xfdt univerz\xe1ln\xedm obecn\xfdm asistentem a podle m\xfdch zku\u0161enost\xed se jen z\u0159\xeddka pt\xe1 na follow-upy."),(0,n.kt)("h4",{id:"terapeutick\xfd-chatbot-kter\xfd-se-pt\xe1-na-v\xe1\u0161-den"},"Terapeutick\xfd chatbot, kter\xfd se pt\xe1 na v\xe1\u0161 den."),(0,n.kt)("p",null,"M\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9 m\xedt chatbota, kter\xfd se aktivn\u011b pt\xe1 a z\xedsk\xe1v\xe1 zp\u011btnou vazbu od u\u017eivatele. N\xed\u017ee je uveden p\u0159\xedklad v\xfdzvy terapeutick\xe9ho chatbota, kter\xfd bude kl\xe1st ot\xe1zky a navazovat na n\u011b, aby u\u017eivateli pomohl p\u0159em\xfd\u0161let o jeho dni."),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:i,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Prompt terapeutick\xe9ho chatbota")),(0,n.kt)("h4",{id:"promluvte-si-se-sv\xfdm-mlad\u0161\xedm-j\xe1-pomoc\xed-star\xfdch-z\xe1znam\u016f-v-den\xedku"},"Promluvte si se sv\xfdm mlad\u0161\xedm j\xe1 pomoc\xed star\xfdch z\xe1znam\u016f v den\xedku."),(0,n.kt)("a",{href:"https://twitter.com/michellehuang42"},"Michelle Huang")," pou\u017eila GPT-3 k rozhovoru se sv\xfdm mlad\u0161\xedm j\xe1. Prompt vyu\u017e\xedv\xe1 ur\u010dit\xfd kontext, v tomto p\u0159\xedpad\u011b star\xe9 den\xedkov\xe9 z\xe1znamy, ve spojen\xed s form\xe1tem chatbota tam a zp\u011bt. GPT-3 dok\xe1\u017ee na z\xe1klad\u011b t\u011bchto z\xe1znam\u016f napodobit osobnost.",(0,n.kt)("p",null),(0,n.kt)("blockquote",{class:"twitter-tweet"},(0,n.kt)("p",{lang:"en",dir:"ltr"},'i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my "inner child"',(0,n.kt)("br",null),(0,n.kt)("br",null),"some reflections below:"),"\u2014 michelle huang (@michellehuang42) ",(0,n.kt)("a",{href:"https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw"},"November 27, 2022"))," ",(0,n.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,n.kt)("p",null,"Prompt z Tweetu:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"N\xe1sleduje rozhovor s p\u0159\xedtomnou Michelle (v\u011bk [redigov\xe1no]) a mladou Michelle (v\u011bk 14 let).\n\nMlad\xe1 Michelle napsala n\xe1sleduj\xedc\xed z\xe1znamy do den\xedku:\n[den\xedkov\xe9 z\xe1znamy zde].\n\nSou\u010dasn\xe1 Michelle: [sem napi\u0161te sv\xe9 ot\xe1zky]\n")),(0,n.kt)("p",null,"Autorka upozor\u0148uje, \u017ee den\xedkov\xe9 z\xe1znamy mohou dos\xe1hnout limitu token\u016f. V tomto p\u0159\xedpad\u011b byste mohli vybrat n\u011bkolik vybran\xfdch z\xe1znam\u016f nebo se pokusit shrnout n\u011bkolik z\xe1znam\u016f."),(0,n.kt)("h2",{id:"implementace"},"Implementace"),(0,n.kt)("p",null,"Provedu v\xe1s k\xf3dov\xe1n\xedm jednoduch\xe9ho chatbota s podporou GPT-3 v jazyce Python. Za\u010dlen\u011bn\xed GPT-3 do vytv\xe1\u0159en\xe9 aplikace je pomoc\xed rozhran\xed API OpenAI neuv\u011b\u0159iteln\u011b snadn\xe9. Budete si muset vytvo\u0159it \xfa\u010det na OpenAI a z\xedskat kl\xed\u010d API. Pod\xedvejte se na jejich dokumentaci ",(0,n.kt)("a",{href:"https://beta.openai.com/docs/introduction"},"zde."),"."),(0,n.kt)("p",null,"P\u0159ehled toho, co pot\u0159ebujeme ud\u011blat:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Form\xe1tovat vstup u\u017eivatele do promptu chatbota pro GPT-3"),(0,n.kt)("li",{parentName:"ol"},"Z\xedskat odpov\u011b\u010f chatbota jako dokon\u010den\xed (completion) z GPT-3"),(0,n.kt)("li",{parentName:"ol"},"Aktualizovat prompt se vstupem u\u017eivatele a s odpov\u011bd\xed chatbota."),(0,n.kt)("li",{parentName:"ol"},"Ud\u011blat smy\u010dku")),(0,n.kt)("p",null,"Zde je prompt, kter\xfd budu pou\u017e\xedvat. Pomoc\xed pythonu m\u016f\u017eeme nahradit <conversation history",">"," a <user input",">"," jejich skute\u010dn\xfdmi hodnotami."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'chatbot_prompt = """\n    Jako pokro\u010dil\xfd chatbot je va\u0161\xedm hlavn\xedm c\xedlem pom\xe1hat u\u017eivatel\u016fm, jak nejl\xe9pe um\xedte. To m\u016f\u017ee zahrnovat zodpov\xedd\xe1n\xed ot\xe1zek, poskytov\xe1n\xed u\u017eite\u010dn\xfdch informac\xed nebo pln\u011bn\xed \xfakol\u016f na z\xe1klad\u011b u\u017eivatelsk\xfdch vstup\u016f. Abyste mohli u\u017eivatel\u016fm \xfa\u010dinn\u011b pom\xe1hat, je d\u016fle\u017eit\xe9, abyste byli ve sv\xfdch odpov\u011bd\xedch podrobn\xed a d\u016fkladn\xed. Pou\u017e\xedvejte p\u0159\xedklady a d\u016fkazy, abyste podpo\u0159ili sv\xe9 body a od\u016fvodnili sv\xe1 doporu\u010den\xed nebo \u0159e\u0161en\xed.\n\n    <conversation history>\n\n    U\u017eivatel: <user input>\n    Chatbot:"""\n')),(0,n.kt)("p",null,"Sleduji dal\u0161\xed vstup u\u017eivatele i p\u0159edchoz\xed konverzaci. Nov\xfd vstup/v\xfdstup mezi chatbotem a u\u017eivatelem se p\u0159ipojuje v ka\u017ed\xe9 smy\u010dce."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import openai\n\nopenai.api_key = "V\xc1\u0160 API KL\xcd\u010c"\nmodel_engine = "text-davinci-003"\nchatbot_prompt = """\nJako pokro\u010dil\xfd chatbot je va\u0161\xedm hlavn\xedm c\xedlem pom\xe1hat u\u017eivatel\u016fm, jak nejl\xe9pe um\xedte. To m\u016f\u017ee zahrnovat zodpov\xedd\xe1n\xed ot\xe1zek, poskytov\xe1n\xed u\u017eite\u010dn\xfdch informac\xed nebo pln\u011bn\xed \xfakol\u016f na z\xe1klad\u011b u\u017eivatelsk\xfdch vstup\u016f. Abyste mohli u\u017eivatel\u016fm \xfa\u010dinn\u011b pom\xe1hat, je d\u016fle\u017eit\xe9, aby va\u0161e odpov\u011bdi byly podrobn\xe9 a d\u016fkladn\xe9. Pou\u017e\xedvejte p\u0159\xedklady a d\u016fkazy, abyste podpo\u0159ili sv\xe9 body a od\u016fvodnili sv\xe1 doporu\u010den\xed nebo \u0159e\u0161en\xed.\n\n<conversation history>\n\nUser: <user input>\nChatbot:"""\n\n\ndef get_response(conversation_history, user_input):\n    prompt = chatbot_prompt.replace(\n        "<conversation history>", conversation_history).replace("<user input>", user_input)\n\n    # Get the response from GPT-3\n    response = openai.Completion.create(\n        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)\n\n    # Extract the response from the response object\n    response_text = response["choices"][0]["text"]\n\n    chatbot_response = response_text.strip()\n\n    return chatbot_response\n\n\ndef main():\n    conversation_history = ""\n\n    while True:\n        user_input = input("> ")\n        if user_input == "exit":\n            break\n        chatbot_response = get_response(conversation_history, user_input)\n        print(f"Chatbot: {chatbot_response}")\n        conversation_history += f"User: {user_input}\\nChatbot: {chatbot_response}\\n"\n\nmain()\n')),(0,n.kt)("a",{href:"https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d"},"Tady je odkaz")," na cel\xfd k\xf3d jednoduch\xe9ho chatbota.",(0,n.kt)("p",null),(0,n.kt)("p",null,"Te\u010f u\u017e zb\xfdv\xe1 jen vytvo\u0159it p\u011bkn\xfd front-end, se kter\xfdm budou moci u\u017eivatel\xe9 komunikovat!"),(0,n.kt)("p",null,"Napsal u\u017eivatel ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/jayo782"},"jayo78"),"."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"OpenAI. (2022). ChatGPT: Optimizing Language Models for Dialogue. https://openai.com/blog/chatgpt/. https://openai.com/blog/chatgpt/\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Jurafsky, D., & Martin, J. H. (2009). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech Recognition. Prentice Hall.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);