"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1943],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>v});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),k=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=k(o),d=n,v=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return o?a.createElement(v,r(r({ref:t},m),{},{components:o})):a.createElement(v,r({ref:t},m))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,r=new Array(l);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,r[1]=i;for(var k=2;k<l;k++)r[k]=o[k];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},36488:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>v});var a=o(87462),n=(o(67294),o(3905));const l=o.p+"assets/images/chatbot_from_kb_intents-26defe08be3840898a001f744580bebd.png",r=o.p+"assets/images/chatbot_from_kb_gpt3-b1b71b5a76270f0ce2e14716f7546d33.png",i=o.p+"assets/images/chatbot_from_kb_gpt3_organized-7a4e195a1ae2dfc507fb58a6a987f2b6.png",p=o.p+"assets/images/chatbot_from_kb_prompt-8f462a976480059dc1dc16128205efb5.png",k=o.p+"assets/images/chatbot_from_kb_login-e6158311f99a54e7c35a154739ff2a14.png",m={sidebar_position:40},s="\ud83d\udfe2 Chatbot + znalostn\xed b\xe1ze",u={unversionedId:"applied_prompting/build_chatbot_from_kb",id:"applied_prompting/build_chatbot_from_kb",title:"\ud83d\udfe2 Chatbot + znalostn\xed b\xe1ze",description:"Ned\xe1vn\xe9 pokroky v oblasti %velk\xfdch jazykov\xfdch model\u016f|LLM%%, jako jsou GPT-3 a ChatGPT, vyvolaly v technologick\xe9m pr\u016fmyslu velk\xfd rozruch. Tyto modely jsou neuv\u011b\u0159iteln\u011b v\xfdkonn\xe9 pro generov\xe1n\xed obsahu, ale maj\xed tak\xe9 n\u011bkter\xe9 nev\xfdhody, jako je zkreslen\xed(@nadeem-etal-2021-stereoset) a halucinace(@Ji_2022). Jednou z oblast\xed, ve kter\xe9 mohou b\xfdt tyto LLM obzvl\xe1\u0161t\u011b u\u017eite\u010dn\xe9, je v\xfdvoj chatbot\u016f.",source:"@site/docs/applied_prompting/build_chatbot_from_kb.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatbot_from_kb",permalink:"/Learn_Prompting_CAI/docs/applied_prompting/build_chatbot_from_kb",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Sestavit ChatGPT z GPT-3",permalink:"/Learn_Prompting_CAI/docs/applied_prompting/build_chatgpt"},next:{title:"\ud83d\ude80 Pokro\u010dil\xe9 aplikace",permalink:"/Learn_Prompting_CAI/docs/category/-pokro\u010dil\xe9-aplikace"}},d={},v=[{value:"Chatboty zalo\u017een\xe9 na z\xe1m\u011brech",id:"chatboty-zalo\u017een\xe9-na-z\xe1m\u011brech",level:2},{value:"Jak m\u016f\u017ee GPT-3 pomoci",id:"jak-m\u016f\u017ee-gpt-3-pomoci",level:2},{value:"Pro\u010d nem\u016f\u017eeme GPT-3 p\u0159edat cel\xfd KB?",id:"pro\u010d-nem\u016f\u017eeme-gpt-3-p\u0159edat-cel\xfd-kb",level:2},{value:"Jak by mohl chatbot s GPT-3 fungovat",id:"jak-by-mohl-chatbot-s-gpt-3-fungovat",level:2},{value:"Generov\xe1n\xed odpov\u011bd\xed pomoc\xed GPT-3",id:"generov\xe1n\xed-odpov\u011bd\xed-pomoc\xed-gpt-3",level:2},{value:"Rozkl\xed\u010dov\xe1n\xed ot\xe1zek pomoc\xed GPT-3",id:"rozkl\xed\u010dov\xe1n\xed-ot\xe1zek-pomoc\xed-gpt-3",level:2},{value:"Probl\xe9my s generov\xe1n\xedm odpov\u011bd\xed pomoc\xed GPT-3",id:"probl\xe9my-s-generov\xe1n\xedm-odpov\u011bd\xed-pomoc\xed-gpt-3",level:2},{value:"Z\xe1v\u011br",id:"z\xe1v\u011br",level:2}],c={toc:v},h="wrapper";function b(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-chatbot--znalostn\xed-b\xe1ze"},"\ud83d\udfe2 Chatbot + znalostn\xed b\xe1ze"),(0,n.kt)("p",null,"Ned\xe1vn\xe9 pokroky v oblasti %velk\xfdch jazykov\xfdch model\u016f|LLM%%, jako jsou ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.14165"},"GPT-3")," a ",(0,n.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT"),", vyvolaly v technologick\xe9m pr\u016fmyslu velk\xfd rozruch. Tyto modely jsou neuv\u011b\u0159iteln\u011b v\xfdkonn\xe9 pro generov\xe1n\xed obsahu, ale maj\xed tak\xe9 n\u011bkter\xe9 nev\xfdhody, jako je zkreslen\xed",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," a halucinace",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Jednou z oblast\xed, ve kter\xe9 mohou b\xfdt tyto LLM obzvl\xe1\u0161t\u011b u\u017eite\u010dn\xe9, je v\xfdvoj chatbot\u016f."),(0,n.kt)("h2",{id:"chatboty-zalo\u017een\xe9-na-z\xe1m\u011brech"},"Chatboty zalo\u017een\xe9 na z\xe1m\u011brech"),(0,n.kt)("p",null,'Tradi\u010dn\xed chatboti jsou obvykle zalo\u017eeni na z\xe1m\u011brech (Intent-Based Chatbots), co\u017e znamen\xe1, \u017ee jsou navr\u017eeni tak, aby reagovali na konkr\xe9tn\xed z\xe1m\u011bry u\u017eivatel\u016f. Ka\u017ed\xfd z\xe1m\u011br se skl\xe1d\xe1 ze sady vzorov\xfdch ot\xe1zek a souvisej\xedc\xed odpov\u011bdi. Nap\u0159\xedklad z\xe1m\u011br "Po\u010das\xed" m\u016f\u017ee obsahovat vzorov\xe9 ot\xe1zky typu "Jak\xe9 je dnes po\u010das\xed?" nebo "Bude dnes pr\u0161et?" a odpov\u011b\u010f typu "Dnes bude slune\u010dno". Kdy\u017e u\u017eivatel polo\u017e\xed ot\xe1zku, chatbot ji p\u0159i\u0159ad\xed k z\xe1m\u011bru s nejpodobn\u011bj\u0161\xedmi vzorov\xfdmi ot\xe1zkami a vr\xe1t\xed souvisej\xedc\xed odpov\u011b\u010f.'),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:l,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Jak funguje tradi\u010dn\xed chatbot zalo\u017een\xfd na z\xe1m\u011brech. Obr\xe1zek od autora.")),(0,n.kt)("p",null,'Chatboty zalo\u017een\xe9 na z\xe1m\u011bru v\u0161ak maj\xed vlastn\xed \u0159adu probl\xe9m\u016f. Jedn\xedm z probl\xe9m\u016f je, \u017ee vy\u017eaduj\xed velk\xe9 mno\u017estv\xed konkr\xe9tn\xedch z\xe1m\u011br\u016f, aby mohly poskytovat konkr\xe9tn\xed odpov\u011bdi. Nap\u0159\xedklad u\u017eivatelsk\xe9 v\xfdroky jako "Nemohu se p\u0159ihl\xe1sit", "Zapomn\u011bl jsem heslo" nebo "Chyba p\u0159i p\u0159ihla\u0161ov\xe1n\xed" mohou vy\u017eadovat t\u0159i r\u016fzn\xe9 odpov\u011bdi, a tedy t\u0159i r\u016fzn\xe9 z\xe1m\u011bry, p\u0159esto\u017ee jsou si v\u0161echny docela podobn\xe9.'),(0,n.kt)("h2",{id:"jak-m\u016f\u017ee-gpt-3-pomoci"},"Jak m\u016f\u017ee GPT-3 pomoci"),(0,n.kt)("p",null,"V tomto p\u0159\xedpad\u011b m\u016f\u017ee b\xfdt GPT-3 obzvl\xe1\u0161t\u011b u\u017eite\u010dn\xfd. Nam\xedsto mnoha velmi specifick\xfdch z\xe1m\u011br\u016f m\u016f\u017ee b\xfdt ka\u017ed\xfd z\xe1m\u011br \u0161ir\u0161\xed a vyu\u017e\xedvat dokument z va\u0161\xed ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Knowledge_base"},"znalostn\xed b\xe1ze"),". Datab\xe1ze znalost\xed (ang. Knowledge Base \u2013 KB) jsou informace ulo\u017een\xe9 jako strukturovan\xe1 i nestrukturovan\xe1 data, p\u0159ipraven\xe1 k pou\u017eit\xed pro anal\xfdzu nebo odvozov\xe1n\xed. Va\u0161e KB se m\u016f\u017ee skl\xe1dat z \u0159ady dokument\u016f vysv\u011btluj\xedc\xedch, jak pou\u017e\xedvat va\u0161e produkty."),(0,n.kt)("p",null,'Ka\u017ed\xfd z\xe1m\u011br je tak spojen s dokumentem nam\xedsto seznamu ot\xe1zek a konkr\xe9tn\xed odpov\u011bdi, nap\u0159. jeden z\xe1m\u011br pro "probl\xe9my s p\u0159ihl\xe1\u0161en\xedm", jeden z\xe1m\u011br pro "jak se p\u0159ihl\xe1sit" atd. Kdy\u017e se u\u017eivatel zept\xe1 na p\u0159ihl\xe1\u0161en\xed, m\u016f\u017eeme dokument "probl\xe9my s p\u0159ihl\xe1\u0161en\xedm" p\u0159edat GPT-3 jako kontextovou informaci a vygenerovat konkr\xe9tn\xed odpov\u011b\u010f na u\u017eivatelovu ot\xe1zku.'),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:r,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Jak by mohl chatbot vyu\u017e\xedvaj\xedc\xed GPT-3 fungovat. Obr\xe1zek od autora.")),(0,n.kt)("p",null,'Tento p\u0159\xedstup sni\u017euje po\u010det z\xe1m\u011br\u016f, kter\xe9 je t\u0159eba spravovat, a umo\u017e\u0148uje l\xe9pe p\u0159izp\u016fsobit odpov\u011bdi jednotliv\xfdm ot\xe1zk\xe1m. Pokud nav\xedc dokument spojen\xfd se z\xe1m\u011brem popisuje r\u016fzn\xe9 procesy (nap\u0159. proces pro "p\u0159ihl\xe1\u0161en\xed na webov\xe9 str\xe1nce" a jin\xfd pro "p\u0159ihl\xe1\u0161en\xed v mobiln\xed aplikaci"), m\u016f\u017ee GPT-3 p\u0159ed poskytnut\xedm kone\u010dn\xe9 odpov\u011bdi automaticky po\u017e\xe1dat u\u017eivatele o vysv\u011btlen\xed.'),(0,n.kt)("h2",{id:"pro\u010d-nem\u016f\u017eeme-gpt-3-p\u0159edat-cel\xfd-kb"},"Pro\u010d nem\u016f\u017eeme GPT-3 p\u0159edat cel\xfd KB?"),(0,n.kt)("p",null,"V sou\u010dasn\xe9 dob\u011b maj\xed LLM jako GPT-3 maxim\xe1ln\xed velikost dotazu asi 4k token\u016f (pro model ",(0,n.kt)("a",{parentName:"p",href:"https://beta.openai.com/docs/models/gpt-3"},(0,n.kt)("inlineCode",{parentName:"a"},"text-davinci-003")),"), co\u017e je sice hodn\u011b, ale nesta\u010d\xed to pro p\u0159ed\xe1n\xed cel\xe9 KB do jednoho dotazu. Modely LLM maj\xed maxim\xe1ln\xed velikost prompt\u016f z v\xfdpo\u010detn\xedch d\u016fvod\u016f, proto\u017ee generov\xe1n\xed textu pomoc\xed nich zahrnuje mno\u017estv\xed v\xfdpo\u010dt\u016f, kter\xe9 se rychle zvy\u0161uje s rostouc\xed velikost\xed prompt\u016f."),(0,n.kt)("p",null,"Budouc\xed LLM nemus\xed m\xedt toto omezen\xed a z\xe1rove\u0148 si zachovaj\xed schopnost generovat text. Prozat\xedm je v\u0161ak t\u0159eba navrhnout \u0159e\u0161en\xed, kter\xe9 to obejde."),(0,n.kt)("h2",{id:"jak-by-mohl-chatbot-s-gpt-3-fungovat"},"Jak by mohl chatbot s GPT-3 fungovat"),(0,n.kt)("p",null,"Pipeline chatbota by se tedy mohlo skl\xe1dat ze dvou krok\u016f:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Nejprve mus\xedme vybrat vhodn\xfd z\xe1m\u011br pro ot\xe1zku u\u017eivatele, tj. mus\xedme na\u010d\xedst spr\xe1vn\xfd dokument z na\u0161\xed znalostn\xed b\xe1ze."),(0,n.kt)("li",{parentName:"ol"},"Pot\xe9, jakmile m\xe1me spr\xe1vn\xfd dokument, m\u016f\u017eeme vyu\u017e\xedt GPT-3 k vygenerov\xe1n\xed vhodn\xe9 odpov\u011bdi pro u\u017eivatele. P\u0159itom budeme muset vytvo\u0159it dobr\xfd prompt.")),(0,n.kt)("p",null,"Prvn\xed krok v podstat\u011b \u0159e\u0161\xed ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_search"},"s\xe9mantick\xe9 vyhled\xe1v\xe1n\xed"),". M\u016f\u017eeme pou\u017e\xedt p\u0159edtr\xe9novan\xe9 modely z knihovny ",(0,n.kt)("a",{parentName:"p",href:"https://www.sbert.net/examples/applications/semantic-search/README.html"},(0,n.kt)("inlineCode",{parentName:"a"},"sentence-transformers"))," a snadno p\u0159i\u0159adit ka\u017ed\xe9mu dokumentu sk\xf3re. Dokument s nejvy\u0161\u0161\xedm sk\xf3re bude pou\u017eit pro vygenerov\xe1n\xed odpov\u011bdi chatbota."),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:i,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"GPT-3 by mohl b\xfdt pou\u017eit k vygenerov\xe1n\xed vhodn\xe9 odpov\u011bdi s vyu\u017eit\xedm informac\xed z dokument\u016f znalostn\xed b\xe1ze. Obr\xe1zek od autora.")),(0,n.kt)("h2",{id:"generov\xe1n\xed-odpov\u011bd\xed-pomoc\xed-gpt-3"},"Generov\xe1n\xed odpov\u011bd\xed pomoc\xed GPT-3"),(0,n.kt)("p",null,"Jakmile budeme m\xedt k dispozici spr\xe1vn\xfd dokument, budeme muset vytvo\u0159it vhodn\xfd prompt, kter\xfd pou\u017eijeme s GPT-3 ke generov\xe1n\xed odpov\u011bdi. V n\xe1sleduj\xedc\xedch experimentech budeme v\u017edy pou\u017e\xedvat model ",(0,n.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," s teplotou ",(0,n.kt)("inlineCode",{parentName:"p"},"0,7"),"."),(0,n.kt)("p",null,"Pro vytvo\u0159en\xed promptu budeme experimentovat pomoc\xed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Learn_Prompting_CAI/docs/basics/roles"},(0,n.kt)("strong",{parentName:"a"},"Prompting pomoc\xed rol\xed")),": heuristick\xe1 technika, kter\xe1 um\u011bl\xe9 inteligenci p\u0159i\u0159azuje konkr\xe9tn\xed role."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Relevantn\xed informace KB"),", tj. dokument z\xedskan\xfd v kroku s\xe9mantick\xe9ho vyhled\xe1v\xe1n\xed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Posledn\xed zpr\xe1vy vym\u011bn\u011bn\xe9 mezi u\u017eivatelem a chatbotem"),". Ty jsou u\u017eite\u010dn\xe9 pro zpr\xe1vy odeslan\xe9 u\u017eivatelem, u nich\u017e nen\xed specifikov\xe1n cel\xfd kontext. P\u0159\xedklad si uk\xe1\u017eeme pozd\u011bji. Pod\xedvejte se na ",(0,n.kt)("a",{parentName:"li",href:"/Learn_Prompting_CAI/docs/applied_prompting/build_chatgpt"},"tento p\u0159\xedklad"),", jak spravovat konverzace pomoc\xed GPT-3."),(0,n.kt)("li",{parentName:"ul"},"A kone\u010dn\u011b ",(0,n.kt)("strong",{parentName:"li"},"ot\xe1zka u\u017eivatele"),".")),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:p,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Informace pou\u017eit\xe9 k vytvo\u0159en\xed na\u0161eho promptu pro GPT-3. Obr\xe1zek od autora.")),(0,n.kt)("p",null,"Za\u010dn\u011bme na\u0161i v\xfdzvu pomoc\xed techniky ",(0,n.kt)("span",{className:"yellow-highlight"},"role-prompting"),"."),(0,n.kt)("pre",null,(0,n.kt)("span",{className:"yellow-highlight"},"Jako pokro\u010dil\xfd chatbot jm\xe9nem Skippy m\xe1te za \xfakol p\u0159edev\u0161\xedm pom\xe1hat u\u017eivatel\u016fm, jak nejl\xe9pe dovedete ")),(0,n.kt)("p",null,"Pak p\u0159edpokl\xe1dejme, \u017ee krok s\xe9mantick\xe9ho vyhled\xe1v\xe1n\xed extrahuje z na\u0161\xed znalostn\xed b\xe1ze n\xe1sleduj\xedc\xed dokument. V\u0161echny dokumenty popisuj\xed, jak funguje produkt VideoGram, co\u017e je imagin\xe1rn\xed produkt podobn\xfd Instagramu, ale pouze pro videa."),(0,n.kt)("div",{style:{textAlign:"left"}},(0,n.kt)("img",{src:k,style:{width:"700px"}}),(0,n.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Dokument, vysv\u011btluj\xedc\xed, jak funguje p\u0159ihla\u0161ov\xe1n\xed do slu\u017eby VideoGram. Obr\xe1zek od autora.")),(0,n.kt)("p",null,"T\xedmto zp\u016fsobem m\u016f\u017eeme p\u0159idat ",(0,n.kt)("span",{className:"yellow-highlight"},"jeho obsah")," do promptu."),(0,n.kt)("pre",null,"Jako pokro\u010dil\xfd chatbot jm\xe9nem Skippy m\xe1te za \xfakol p\u0159edev\u0161\xedm pom\xe1hat u\u017eivatel\u016fm, jak nejl\xe9pe dovedete.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("span",{className:"yellow-highlight"},"START CONTEXT",(0,n.kt)("br",null),"P\u0159ihl\xe1\u0161en\xed do slu\u017eby VideoGram z webov\xe9 str\xe1nky",(0,n.kt)("br",null),"1. Otev\u0159ete webov\xfd prohl\xed\u017ee\u010d a p\u0159ejd\u011bte na webovou str\xe1nku VideoGram.",(0,n.kt)("br",null),'2. Klikn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se", kter\xe9 se nach\xe1z\xed v prav\xe9m horn\xedm rohu str\xe1nky.',(0,n.kt)("br",null),"3. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo VideoGram.",(0,n.kt)("br",null),'4. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klikn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se".',(0,n.kt)("br",null),"5. Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram.",(0,n.kt)("br",null),(0,n.kt)("br",null),"P\u0159ihl\xe1\u0161en\xed do slu\u017eby VideoGram z mobiln\xed aplikace",(0,n.kt)("br",null),"1. Otev\u0159ete aplikaci VideoGram na sv\xe9m mobiln\xedm za\u0159\xedzen\xed.",(0,n.kt)("br",null),'2. Na hlavn\xed str\xe1nce klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se", kter\xe9 se nach\xe1z\xed v prav\xe9m doln\xedm rohu.',(0,n.kt)("br",null),"3. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo pro slu\u017ebu VideoGram.",(0,n.kt)("br",null),'4. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se".',(0,n.kt)("br",null),"5. Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram.",(0,n.kt)("br",null),"KONEC KONTEXTU",(0,n.kt)("br",null))),(0,n.kt)("p",null,"Nakonec mus\xedme na konec promptu p\u0159idat ",(0,n.kt)("span",{className:"yellow-highlight"},"konverzaci a ot\xe1zku u\u017eivatele"),", jako v n\xe1sleduj\xedc\xedm p\u0159\xedkladu."),(0,n.kt)("pre",null,"Jako pokro\u010dil\xfd chatbot jm\xe9nem Skippy m\xe1te za \xfakol p\u0159edev\u0161\xedm pom\xe1hat u\u017eivatel\u016fm, jak nejl\xe9pe dovedete.",(0,n.kt)("br",null),(0,n.kt)("br",null),"ZA\u010c\xc1TEK KONTEXTU",(0,n.kt)("br",null),"P\u0159ihl\xe1\u0161en\xed do slu\u017eby VideoGram z webov\xe9 str\xe1nky",(0,n.kt)("br",null),"1. Otev\u0159ete webov\xfd prohl\xed\u017ee\u010d a p\u0159ejd\u011bte na webovou str\xe1nku VideoGramu.",(0,n.kt)("br",null),'2. Klikn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se", kter\xe9 se nach\xe1z\xed v prav\xe9m horn\xedm rohu str\xe1nky.',(0,n.kt)("br",null),"3. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo VideoGram.",(0,n.kt)("br",null),'4. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klikn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se".',(0,n.kt)("br",null),"5. Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram.",(0,n.kt)("br",null),(0,n.kt)("br",null),"P\u0159ihl\xe1\u0161en\xed do slu\u017eby VideoGram z mobiln\xed aplikace",(0,n.kt)("br",null),"1. Otev\u0159ete aplikaci VideoGram na sv\xe9m mobiln\xedm za\u0159\xedzen\xed.",(0,n.kt)("br",null),'2. Na hlavn\xed str\xe1nce klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se", kter\xe9 se nach\xe1z\xed v prav\xe9m doln\xedm rohu.',(0,n.kt)("br",null),"3. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo pro slu\u017ebu VideoGram.",(0,n.kt)("br",null),'4. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se".',(0,n.kt)("br",null),"5. Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram.",(0,n.kt)("br",null),"KONEC KONTEXTU",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("span",{className:"yellow-highlight"},"SKIPPY: Dobr\xfd den, j\xe1 jsem Skippy! Jak v\xe1m mohu pomoci?",(0,n.kt)("br",null),"U\u017dIVATEL: Nemohu naj\xedt tla\u010d\xedtko pro p\u0159ihl\xe1\u0161en\xed.",(0,n.kt)("br",null),"SKIPPY:"),(0,n.kt)("br",null)),(0,n.kt)("p",null,"Po p\u0159ed\xe1n\xed tohoto promptu GPT-3 jsem dostal n\xe1sleduj\xedc\xed vygenerovanou odpov\u011b\u010f."),(0,n.kt)("pre",null,(0,n.kt)("span",{className:"bluegreen-highlight"},"\u017d\xe1dn\xfd probl\xe9m! Na webov\xe9 str\xe1nce se tla\u010d\xedtko pro p\u0159ihl\xe1\u0161en\xed nach\xe1z\xed v prav\xe9m horn\xedm rohu str\xe1nky. V mobiln\xed aplikaci se tla\u010d\xedtko pro p\u0159ihl\xe1\u0161en\xed nach\xe1z\xed v prav\xe9m doln\xedm rohu. Pokud budete pot\u0159ebovat dal\u0161\xed pomoc, dejte mi v\u011bd\u011bt!")),(0,n.kt)("p",null,"V\u0161imn\u011bte si, \u017ee informace ve vygenerovan\xe9 odpov\u011bdi poch\xe1zej\xed z dokumentu znalostn\xed b\xe1ze."),(0,n.kt)("h2",{id:"rozkl\xed\u010dov\xe1n\xed-ot\xe1zek-pomoc\xed-gpt-3"},"Rozkl\xed\u010dov\xe1n\xed ot\xe1zek pomoc\xed GPT-3"),(0,n.kt)("p",null,"Zkusme to s v\xe1gn\u011bj\u0161\xedm u\u017eivatelsk\xfdm v\xfdrokem, nap\u0159\xedklad ",(0,n.kt)("span",{className:"yellow-highlight"},'"nemohu se p\u0159ihl\xe1sit"'),". Zde je kompletn\xed dotaz."),(0,n.kt)("pre",null,"Jako pokro\u010dil\xfd chatbot jm\xe9nem Skippy je va\u0161\xedm hlavn\xedm c\xedlem pom\xe1hat u\u017eivatel\u016fm, jak nejl\xe9pe dovedete.",(0,n.kt)("br",null),(0,n.kt)("br",null),"START KONTEXTU",(0,n.kt)("br",null),"P\u0159ihlaste se do slu\u017eby VideoGram z webov\xe9 str\xe1nky",(0,n.kt)("br",null),"1. Otev\u0159ete webov\xfd prohl\xed\u017ee\u010d a p\u0159ejd\u011bte na webovou str\xe1nku VideoGramu.",(0,n.kt)("br",null),'2. Klikn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se", kter\xe9 se nach\xe1z\xed v prav\xe9m horn\xedm rohu str\xe1nky.',(0,n.kt)("br",null),"3. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo VideoGram.",(0,n.kt)("br",null),'4. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klikn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se".',(0,n.kt)("br",null),"5. Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram.",(0,n.kt)("br",null),(0,n.kt)("br",null),"P\u0159ihl\xe1\u0161en\xed do slu\u017eby VideoGram z mobiln\xed aplikace",(0,n.kt)("br",null),"1. Otev\u0159ete aplikaci VideoGram na sv\xe9m mobiln\xedm za\u0159\xedzen\xed.",(0,n.kt)("br",null),'2. Na hlavn\xed str\xe1nce klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se", kter\xe9 se nach\xe1z\xed v prav\xe9m doln\xedm rohu.',(0,n.kt)("br",null),"3. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo pro slu\u017ebu VideoGram.",(0,n.kt)("br",null),'4. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit se".',(0,n.kt)("br",null),"5. Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram.",(0,n.kt)("br",null),"KONEC KONTEXTU",(0,n.kt)("br",null),(0,n.kt)("br",null),"SKIPPY: Dobr\xfd den, j\xe1 jsem Skippy! Jak v\xe1m mohu pomoci?",(0,n.kt)("br",null),"U\u017dIVATEL: ",(0,n.kt)("span",{className:"yellow-highlight"},"Nem\u016f\u017eu se p\u0159ihl\xe1sit"),(0,n.kt)("br",null),"SKIPPY:",(0,n.kt)("br",null)),(0,n.kt)("p",null,"GPT-3 odpov\xedd\xe1 a sna\u017e\xed se l\xe9pe pochopit, v \u010dem je probl\xe9m u\u017eivatele."),(0,n.kt)("pre",null,(0,n.kt)("span",{className:"bluegreen-highlight"},"To m\u011b mrz\xed. M\u016f\u017eete mi \u0159\xedct, zda se sna\u017e\xedte p\u0159ihl\xe1sit p\u0159es webov\xe9 str\xe1nky VideoGramu nebo mobiln\xed aplikaci?")),(0,n.kt)("p",null,"D\xe1le uv\xe1d\xedme, jak prob\xedh\xe1 kompletn\xed konverzace. Cel\xe1 v\xfdzva je pro lep\u0161\xed p\u0159ehlednost skryt\xe1."),(0,n.kt)("pre",null,"U\u017dIVATEL: Nelze se p\u0159ihl\xe1sit",(0,n.kt)("br",null),"SKIPPY: To m\u011b mrz\xed. M\u016f\u017eete mi \u0159\xedct, zda se sna\u017e\xedte p\u0159ihl\xe1sit prost\u0159ednictv\xedm webov\xe9 str\xe1nky VideoGramu nebo mobiln\xed aplikace?",(0,n.kt)("br",null),"U\u017dIVATEL: Mobiln\xed aplikace",(0,n.kt)("br",null),(0,n.kt)("span",{className:"bluegreen-highlight"},'SKIPPY: Dob\u0159e, \u017e\xe1dn\xfd probl\xe9m. Chcete-li se p\u0159ihl\xe1sit prost\u0159ednictv\xedm mobiln\xed aplikace, otev\u0159ete na sv\xe9m mobiln\xedm za\u0159\xedzen\xed aplikaci VideoGram. Na hlavn\xed str\xe1nce klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit", kter\xe9 se nach\xe1z\xed v prav\xe9m doln\xedm rohu. Na p\u0159ihla\u0161ovac\xed str\xe1nce zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo VideoGram. Po zad\xe1n\xed p\u0159ihla\u0161ovac\xedch \xfadaj\u016f klepn\u011bte na tla\u010d\xedtko "P\u0159ihl\xe1sit". Nyn\xed byste m\u011bli b\xfdt p\u0159ihl\xe1\u0161eni ke sv\xe9mu \xfa\u010dtu VideoGram. Pokud budete pot\u0159ebovat dal\u0161\xed pomoc, dejte mi pros\xedm v\u011bd\u011bt.')),(0,n.kt)("p",null,"GPT-3 dok\xe1\u017ee odstranit svojsmysly za p\u0159edpokladu, \u017ee m\xe1 k dispozici spr\xe1vn\xe9 kontextov\xe9 informace."),(0,n.kt)("h2",{id:"probl\xe9my-s-generov\xe1n\xedm-odpov\u011bd\xed-pomoc\xed-gpt-3"},"Probl\xe9my s generov\xe1n\xedm odpov\u011bd\xed pomoc\xed GPT-3"),(0,n.kt)("p",null,"P\u0159edchoz\xed p\u0159\xedklady fungovaly dob\u0159e. Existuje v\u0161ak n\u011bkolik zp\u016fsob\u016f, jak by tento chatbot mohl selhat."),(0,n.kt)("p",null,'Pokud bychom se GPT-3 zeptali "Je mobiln\xed aplikace zdarma?" a jako kontext p\u0159edali p\u0159ihla\u0161ovac\xed dokument, \u010dasto bychom dostali odpov\u011b\u010f typu "Ano, mobiln\xed aplikace VideoGram je ke sta\u017een\xed a pou\u017e\xedv\xe1n\xed zdarma", i kdy\u017e takov\xe1 informace nen\xed obsa\u017eena v kontextov\xe9 informaci. Generov\xe1n\xed nepravdiv\xfdch informac\xed je pro chatboty z\xe1kaznick\xe9ho servisu velmi \u0161patn\xe9!'),(0,n.kt)("p",null,"GPT-3 z\u0159\xeddkakdy generuje fale\u0161n\xe9 informace, pokud lze odpov\u011b\u010f na ot\xe1zku u\u017eivatele nal\xe9zt v kontextu. Vzhledem k tomu, \u017ee u\u017eivatelsk\xe9 dotazy jsou \u010dasto kr\xe1tk\xe9 a nejednozna\u010dn\xe9 texty, nem\u016f\u017eeme se spolehnout na to, \u017ee krok s\xe9mantick\xe9ho vyhled\xe1v\xe1n\xed v\u017edy z\xedsk\xe1 spr\xe1vn\xfd dokument, a tak jsme v\u017edy zraniteln\xed v\u016f\u010di generov\xe1n\xed fale\u0161n\xfdch informac\xed."),(0,n.kt)("h2",{id:"z\xe1v\u011br"},"Z\xe1v\u011br"),(0,n.kt)("p",null,"GPT-3 je velmi u\u017eite\u010dn\xfd pro vytv\xe1\u0159en\xed konverza\u010dn\xedch chatbot\u016f a dok\xe1\u017ee odpov\xeddat na \u0159adu konkr\xe9tn\xedch ot\xe1zek na z\xe1klad\u011b kontextov\xfdch informac\xed vlo\u017een\xfdch do promptu. Je v\u0161ak obt\xed\u017en\xe9 p\u0159im\u011bt model, aby vytv\xe1\u0159el odpov\u011bdi vyu\u017e\xedvaj\xedc\xed pouze informace v kontextu, proto\u017ee model m\xe1 tendenci halucinovat (tj. generovat nov\xe9 informace, potenci\xe1ln\u011b nepravdiv\xe9). Generov\xe1n\xed nepravdiv\xfdch informac\xed je probl\xe9m r\u016fzn\xe9 z\xe1va\u017enosti v z\xe1vislosti na p\u0159\xedpadu pou\u017eit\xed."),(0,n.kt)("p",null,"Napsal ",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/"},"Fabio Chiusano"),"."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), 5356\u20135371. https://doi.org/10.18653/v1/2021.acl-long.416\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2022). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys. https://doi.org/10.1145/3571730\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);