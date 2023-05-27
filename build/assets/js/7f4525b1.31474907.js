"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1631],{3359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const l=a.p+"assets/images/pal-102def844edd97ac78e9c26cbc2564f9.png";var p=a(39145);const r={sidebar_position:4},i="\ud83d\udfe1 Code as Reasoning",s={unversionedId:"advanced_applications/pal",id:"advanced_applications/pal",title:"\ud83d\udfe1 Code as Reasoning",description:"Dal\u0161\xedm p\u0159\xedkladem syst\xe9mu MRKL jsou Program-aided Language Models (PAL)(@gao2022pal).",source:"@site/docs/advanced_applications/pal.md",sourceDirName:"advanced_applications",slug:"/advanced_applications/pal",permalink:"/Learn_Prompting_CAI/docs/advanced_applications/pal",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 LLM, kter\xe9 uva\u017euj\xed (React) a jednaj\xed (Act)",permalink:"/Learn_Prompting_CAI/docs/advanced_applications/react"},next:{title:"\u2696\ufe0f Spolehlivost",permalink:"/Learn_Prompting_CAI/docs/category/\ufe0f-spolehlivost"}},d={},m=[{value:"P\u0159\xedklad",id:"p\u0159\xedklad",level:2},{value:"V\xedce",id:"v\xedce",level:2}],k={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-code-as-reasoning"},"\ud83d\udfe1 Code as Reasoning"),(0,o.kt)("p",null,"Dal\u0161\xedm p\u0159\xedkladem syst\xe9mu MRKL jsou ",(0,o.kt)("a",{parentName:"p",href:"https://reasonwithpal.com"},"Program-aided Language Models (PAL)"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nKdy\u017e je jim zad\xe1na ot\xe1zka, ",(0,o.kt)("a",{parentName:"p",id:"PAL_3_29_1685209075904","data-tooltip-html":"Nov\xe1 metoda, kter\xe1 vyu\u017e\xedv\xe1 LLM ke \u010dten\xed probl\xe9m\u016f v p\u0159irozen\xe9m jazyce a generov\xe1n\xed program\u016f jako mezikrok\u016f v uva\u017eov\xe1n\xed, ale krok \u0159e\u0161en\xed p\u0159en\xe1\u0161\xed na programov\xfd runtime, jako je interpret Pythonu.","data-tooltip-place":"top"},"PALy"),(0,o.kt)(p.u,{anchorId:"PAL_3_29_1685209075904",clickable:!0,mdxType:"Tooltip"})," jsou schopny ",(0,o.kt)("strong",{parentName:"p"},"napsat k\xf3d"),", kter\xfd tuto ot\xe1zku vy\u0159e\u0161\xed. Odes\xedlaj\xed k\xf3d do programov\xe9ho runtime, aby z\xedskaly v\xfdsledek. PAL pracuje na jinak ne\u017e ",(0,o.kt)("a",{parentName:"p",id:"Chain of Thought Prompting_8_114_1685209075904","data-tooltip-html":"Prompting pomoc\xed my\u0161lenkov\xe9ho \u0159et\u011bzce (Chain-of-thought prompting - CoT) zlep\u0161uje schopnost uva\u017eov\xe1n\xed LLM t\xedm, \u017ee je podn\u011bcuje k vytvo\u0159en\xed \u0159ady mezikrok\u016f, kter\xe9 vedou ke kone\u010dn\xe9 odpov\u011bdi na v\xedcekrokov\xfd probl\xe9m.","data-tooltip-place":"top"},"CoT"),(0,o.kt)(p.u,{anchorId:"Chain of Thought Prompting_8_114_1685209075904",clickable:!0,mdxType:"Tooltip"}),"; PAL\u016fv meziprodukt uva\u017eov\xe1n\xed je k\xf3d, zat\xedmco u CoT je to p\u0159irozen\xfd jazyk."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:l,style:{width:"500px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"P\u0159\xedklad PAL (Gao a kol.)"),(0,o.kt)("p",null,"Je t\u0159eba si uv\u011bdomit jednu d\u016fle\u017eitou v\u011bc: PAL ve skute\u010dnosti prol\xedn\xe1 p\u0159irozen\xfd jazyk (Natural Language \u2013 NL) a k\xf3d. Na v\xfd\u0161e uveden\xe9m obr\xe1zku jsou mod\u0159e vyzna\u010deny \xfavahy v p\u0159irozen\xe9m jazyce, kter\xe9 PAL generuje. A\u010dkoli nen\xed na obr\xe1zku zobrazen, PAL ve skute\u010dnosti generuje '","#","' p\u0159ed ka\u017ed\xfdm \u0159\xe1dkem \xfavahy NL, aby je programov\xfd runtime interpretoval jako koment\xe1\u0159e."),(0,o.kt)("h2",{id:"p\u0159\xedklad"},"P\u0159\xedklad"),(0,o.kt)("p",null,"Pod\xedvejme se na p\u0159\xedklad, jak PAL \u0159e\u0161\xed matematickou ot\xe1zku. Pou\u017e\xedv\xe1m prompt se t\u0159emi shoty (a 3-shot prompt), kter\xfd je zjednodu\u0161enou verz\xed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py"},"tohoto promptu"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". "),(0,o.kt)("p",null,"Pou\u017eiji k tomu langchain, bal\xed\u010dek jazyka Python pro \u0159et\u011bzen\xed funkc\xed LLM. Nejprve je pot\u0159eba prov\xe9st n\u011bkolik instalac\xed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'!pip install langchain==0.0.26\n!pip install openai\nfrom langchain.llms import OpenAI\nimport os\nos.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"\n')),(0,o.kt)("p",null,"Pot\xe9 m\u016f\u017eeme vytvo\u0159it instanci GPT-3 davinci-002 (API call se uskute\u010dn\xed, kdy\u017e pou\u017eijeme tento objekt)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"llm = OpenAI(model_name='text-davinci-002', temperature=0)\n")),(0,o.kt)("p",null,"Zde je ",(0,o.kt)("a",{parentName:"p",id:"few shot standard prompt_0_7_1685209075904","data-tooltip-html":"Standardn\xed prompty, kter\xe9 obsahuj\xed exempl\xe1\u0159e. Exempl\xe1\u0159e jsou p\u0159\xedklady \xfalohy, kterou se prompy sna\u017e\xed vy\u0159e\u0161it, a kter\xe9 jsou sou\u010d\xe1st\xed samotn\xe9ho promptu.","data-tooltip-place":"top"},"few shot prompt"),(0,o.kt)(p.u,{anchorId:"few shot standard prompt_0_7_1685209075904",clickable:!0,mdxType:"Tooltip"}),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'MATH_PROMPT = \'\'\'\nQ: V serverovn\u011b bylo dev\u011bt po\u010d\xedta\u010d\u016f. Ka\u017ed\xfd den od pond\u011bl\xed do \u010dtvrtka bylo instalov\xe1no dal\u0161\xedch p\u011bt po\u010d\xedta\u010d\u016f. Kolik po\u010d\xedta\u010d\u016f je nyn\xed v serverovn\u011b?\n\n# \u0159e\u0161en\xed v jazyce Python:\n"""V serverovn\u011b bylo dev\u011bt po\u010d\xedta\u010d\u016f. Ka\u017ed\xfd den, od pond\u011bl\xed do \u010dtvrtka, bylo nainstalov\xe1no dal\u0161\xedch p\u011bt po\u010d\xedta\u010d\u016f. Kolik po\u010d\xedta\u010d\u016f je nyn\xed v serverovn\u011b?"""\ncomputers_initial = 9\nomputers_per_day = 5\nnum_days = 4 # 4 dny od pond\u011bl\xed do \u010dtvrtka\ncomputers_added = computers_per_day * num_days\ncomputers_total = computers_initial + computers_added\nresult = computers_total\nreturn result\n\n\nOt\xe1zka: Shawn m\xe1 p\u011bt hra\u010dek. K V\xe1noc\u016fm dostal od maminky a tat\xednka po dvou hra\u010dk\xe1ch. Kolik hra\u010dek m\xe1 nyn\xed?\n\n# \u0159e\u0161en\xed v Pythonu:\n"""Shawn m\xe1 p\u011bt hra\u010dek. K V\xe1noc\u016fm dostal od maminky a tat\xednka po dvou hra\u010dk\xe1ch. Kolik hra\u010dek m\xe1 nyn\xed?"""\ntoys_initial = 5\nmom_toys = 2\ndad_toys = 2\ntotal_received = mom_toys + dad_toys\ntotal_toys = toys_initial + total_received\nresult = total_toys\n\n\nOt\xe1zka: Jason m\u011bl 20 l\xedz\xe1tek. Dal Dennymu n\u011bkolik l\xedz\xe1tek. Nyn\xed m\xe1 Jason 12 l\xedz\xe1tek. Kolik l\xedz\xe1tek dal Jason Dennymu?\n\n# \u0159e\u0161en\xed v Pythonu:\n"""Jason m\u011bl 20 l\xedz\xe1tek. Dal Dennymu n\u011bkolik l\xedz\xe1tek. Nyn\xed m\xe1 Jason 12 l\xedz\xe1tek. Kolik l\xedz\xe1tek dal Jason Dennymu?"""\njason_lollipops_initial = 20\njason_lollipops_after = 12\ndenny_lollipops = jason_lollipops_initial - jason_lollipops_after\nresult = denny_lollipops\n\nOt\xe1zka: {ot\xe1zka}\n\n# \u0159e\u0161en\xed v Pythonu:\n\'\'\'\n')),(0,o.kt)("p",null,"Nyn\xed m\u016f\u017eeme kombinovan\xfd prompt p\u0159edat GPT-3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"llm_out = llm(MATH_PROMPT.format(question=question))\nprint(llm_out)\n")),(0,o.kt)("p",null,"V\xfdstup je n\xe1sleduj\xedc\xed:"),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"bluegreen-highlight"},"Emma let\u011bla 60 minut letadlem do Seattlu. Pot\xe9 jela 2 hodiny vlakem do Portlandu a n\xe1sledn\u011b 30 minut autobusem do Vancouveru. Jak dlouho j\xed trvala cesta do vancouveru?",(0,o.kt)("br",null),(0,o.kt)("br",null),"? plane_ride = 60",(0,o.kt)("br",null),"train_ride = 2 * 60  # 2 hodiny v minut\xe1ch",(0,o.kt)("br",null),"bus_ride = 30",(0,o.kt)("br",null),"total_time = plane_ride + train_ride + bus_ride",(0,o.kt)("br",null),"result = total_time")),(0,o.kt)("p",null,"Nakonec m\u016f\u017eeme tento k\xf3d p\u0159edat Python runtime a z\xedskat odpov\u011b\u010f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"exec(llm_out)\nprint(result)\n")),(0,o.kt)("p",null,"V\xfdsledek je ",(0,o.kt)("strong",{parentName:"p"},"210"),", co\u017e je spr\xe1vn\u011b."),(0,o.kt)("p",null,"Viz z\xe1pisn\xedk Jupyter pro tento p\u0159\xedklad ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb"},"zde"),"."),(0,o.kt)("h2",{id:"v\xedce"},"V\xedce"),(0,o.kt)("p",null,"Pod\xedvejte se tak\xe9 na p\u0159\xedklad ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V"},"PAL's colab example"),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2022). PAL: Program-aided Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);