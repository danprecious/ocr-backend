// import { convertPdfToImages } from "./utils/pdfUtils.js";
// import { preProcessOcrOutput } from "./utils/preProcessOcrOutput.js";
// import { chunkText } from "./utils/tokenization.js";

// // convertPdfToImages("./testFiles/test2.pdf");

// // const ocrOutput = [
// //   "a PL —— — ~ . - B\n" +
// //     "| |\n" +
// //     "Adverse Drug Reactions gE\n" +
// //     "(ADR), Pharmacovigilance, | [m=\n" +
// //     "Factors Affecting Drug Use |\n" +
// //     "Iniaghe L.O. BPharm, MSc, PhD\n" +
// //     "June, 2024 ~~\n" +
// //     "< w. TE }\n",
// //   "Outline |\n" +
// //     "* Overview- Important concepts |\n" +
// //     "* Pharmacovigilance k\n" +
// //     "* ADR i\n" +
// //     "* Types/Classes of ADR\n" +
// //     "* Severity of ADR |\n" +
// //     "~ * Factors Responsible for ADR\n" +
// //     "| + Examples\n" +
// //     "| {i\n" +
// //     "| : 1\n" +
// //     '’ " R——— ] 1 -| :\n',
// //   "Famous quotes....\n" +
// //     "\n" +
// //     "* All substances are poisons. there is none\n" +
// //     "\n" +
// //     "which is not a poison, the right dose\n" +
// //     "\n" +
// //     "differentiates a poison and a remedy\n" +
// //     "\n" +
// //     "(Paracelsus, 1493 - 1541).\n" +
// //     "* Any substance that is capable of producing a\n" +
// //     "therapeutic effect can also produce\n" +
// //     "\n" +
// //     "unwanted or adverse effects.\n" +
// //     "\n" +
// //     "a\n" +
// //     "1 |\n",
// //   "Definition 1\n" +
// //     "* An adverse drug reaction is a “response to a drug\n" +
// //     "which is noxious and unintended and occurs at\n" +
// //     "doses normally used in man for prophylaxis,\n" +
// //     "diagnosis, or therapy of disease or for the\n" +
// //     "modification of physiologic function.”\n" +
// //     "(WHO, 1973).\n" +
// //     "1\n" +
// //     "|\n",
// //   "Definition 2\n" +
// //     "| A harmful or significantly unpleasant effect\n" +
// //     "caused by a drug at doses intended for\n" +
// //     "therapeutic effect(or prophylaxis or\n" +
// //     "diagnosis) which warrants reduction of dose\n" +
// //     "or withdrawal of the drug and/or foretells\n" +
// //     "hazard from future administration.”\n" +
// //     "(Lawrence and Carpenter; 1998)\n" +
// //     "EE (|\n",
// //   "Definition 3\n" +
// //     "* An appreciably harmful or unpleasant\n" +
// //     "reaction, resulting from an intervention\n" +
// //     "related to the use of a medicinal product,\n" +
// //     "which predicts hazard from future\n" +
// //     "administration and warrants prevention or\n" +
// //     "specific treatment, or alteration of the\n" +
// //     "dosage regimen, or withdrawal of the\n" +
// //     "product.”\n" +
// //     "(Edwards and Aronson, 2000) {\n" +
// //     "[\n",
// //   "Concepts/ Terminologies\n" +
// //     "* Occurs at therapeutic doses\n" +
// //     "* Beneficial S/E?\n" +
// //     "* ADR vs side effects\n" +
// //     "+ ADR vs toxic efects\n" +
// //     "* Unexpected adverse reaction\n" +
// //     "+ Serious adverse effect\n" +
// //     "* Idiosyncratic, hypersensitive reactions\n" +
// //     "+ ADR due to principal pharmacological activity\n" +
// //     "vs\n",
// //   "t |\n" +
// //     "i |\n" +
// //     "| * Pharmacovigilance\n" +
// //     "* Predictable ADR |\n" +
// //     "\n" +
// //     "| .\n" +
// //     "* ADR from high doses |\n" +
// //     "|\n" +
// //     "|\n" +
// //     "|\n" +
// //     "\n" +
// //     "|\n" +
// //     "\n" +
// //     "TR A\n",
// //   "* Pharmacovigilance\n\n* Pharmacon\n\n+ Vigilare\n|\n(\n| |\nFo pf |\n",
// //   "nti a RAE ~ » 4 a\n" +
// //     "= 53 ages £3 ide. 3 ih\n" +
// //     "[ECan = ve\n" +
// //     "he ;  -— a IE\n" +
// //     "BE Eo\n" +
// //     "| |\n" +
// //     "| RV\n" +
// //     "]\n" +
// //     "]\n" +
// //     "!\n" +
// //     "EAR\n",
// //   "pe |\n",
// //   "Pharmacovigilance...\n" +
// //     "Aka Drug Safety, study of ADR\n" +
// //     "+ The practice of monitoring the effects of medical\n" +
// //     "drugs after they have been licensed for use, |\n" +
// //     "especially in order to identify and evaluate\n" +
// //     "previously unreported adverse reactions.\n" +
// //     "* Pharmacovigilance (PV) is defined as the science\n" +
// //     "and activities relating to the detection,\n" +
// //     "assessment, understanding and prevention of\n" +
// //     "adverse effects or any other drug-related problem\n" +
// //     "» Pharmacovigilance the pharmacological science\n" +
// //     "relating to the collection, detection, assessment,\n" +
// //     "i monitoring, and prevention of adverse\n" +
// //     "effects with pharmaceutical products\n" +
// //     '& - ="; T=\n',
// //   "| WER\n" +
// //     "Pharmacovigilance... |\n" +
// //     "» Established by WHO for International Drug |\n" +
// //     "Monitoring in response to the thalidomide\n" +
// //     "disaster detected in 1961.\n" +
// //     "* WHO in conjunction with WHO\n" +
// //     "Collaborating Centre for International Drug |\n" +
// //     "Monitoring, Uppsala, promotes PV at the\n" +
// //     "country level.\n" +
// //     "+ At the end of 2010, 134 countries were part of\n" +
// //     "the WHO PV Programme.\n",
// //   "BE 0 se\n" +
// //     "Wile\n" +
// //     "Pharmacovigilance...\n" +
// //     "| * PVaims to:\n" +
// //     "| * identify the hazards associated with the use\n" +
// //     "| of pharmaceutical products ed ills\n" +
// //     '+ minimize the risk of any harm that may come | "8\n' +
// //     "to patients -\n" +
// //     "+ enhance patient care and patient safety in o\n" +
// //     "relation to the use of medicines ¥\n" +
// //     "* support public health programmes by i\n" +
// //     "providing reliable, balanced information for i\n" +
// //     "the effective assessment of the risk-benefit I~\n" +
// //     "profile of medicines. |\n",
// //   "Sources of ADR information\n" +
// //     "\n" +
// //     "+ Information received from patients\n" +
// //     "\n" +
// //     "+ Health care providers\n" +
// //     "\n" +
// //     "* (via Mharmacovigilance agreements (PVAs),\n" +
// //     "\n" +
// //     "» Medical literature\n" +
// //     "\n" +
// //     "* Drug information services\n" +
// //     "\n" +
// //     "* I'harmaceutical Companies\n" +
// //     "\n" +
// //     ": |\n" +
// //     "\n" +
// //     "i Ne n. a\n",
// //   "REp— - A —- SERN Th TE EERE iH\n" +
// //     "3\n" +
// //     "Pharmacovigilance Parlance LI\n" +
// //     ".\n" +
// //     "AOR + Harm '\n" +
// //     "+ AE, fs\n" +
// //     ": + Individual Case Safety\n" +
// //     "* Risks Report (ICSR\n" +
// //     "» Benefits\n" +
// //     "+ Clinical trials\n" +
// //     "+ Effectiveness vs Efficacy ¢\n" +
// //     "i (real world vs CT) |\n" +
// //     "| + Dechallenge/rechallenge &\n" +
// //     "| Tree : Life-threateping ¥\n" +
// //     "Te jP——| |\n" +
// //     "- ===:\n" +
// //     "— ES oid x\n",
// //   "Types of ADR\n" +
// //     "|\n" +
// //     "+ Type A Augmented |\n" +
// //     "BE | © B Bizzare\n" +
// //     "{+ C Chronic |\n" +
// //     "| + D Delayed effects\n" +
// //     "1» E end of use effect\n" +
// //     "| + F Failure of therapy\n" +
// //     "(Rawlins & Thompson, 19\n" +
// //     "i Lion I=F=f=T1=\n" +
// //     "EE ee =a oT Corel a\n",
// //   "| ~ ADRclassffication\n" +
// //     "Type A - Augmented\n" +
// //     "| Type B - Bizarre\n" +
// //     "| Type C - Chemical/Chronic\n" +
// //     "Type D - Delayed\n" +
// //     "Type E - Exit/end of use/Withdrawal\n" +
// //     "| Type F - Familial\n" +
// //     "| Type G - Genetic\n" +
// //     "Type H - Hypersensitivity\n",
// //   "Type A ADR\n" +
// //     "\n" +
// //     "* Dose dependent, related to pharmacological action\n" +
// //     "\n" +
// //     "of the drug\n" +
// //     "+ Predictable\n" +
// //     "| + Common i\n" +
// //     "|* Low mortality\n" +
// //     "+ Examples: Hypotension, sedation (anti-histamines),\n" +
// //     "\n" +
// //     "- {if\n" +
// //     "EE Biogas,\n",
// //   "[ype A ADR\n" +
// //     "+ Dose dependent, related to pharmacologic al action\n" +
// //     "of the dmg\n" +
// //     "+ Predictable\n" +
// //     "+ Common\n" +
// //     "+ Low mortality\n" +
// //     "[== I= |=\n" +
// //     "EN EE\n" +
// //     "| {\n",
// //   "| Type A ADR\n" +
// //     "+ Dose dependent, related to pharmacological action\n" +
// //     "of the drug |\n" +
// //     "+ Predictable\n" +
// //     "| + Common\n" +
// //     "| + Low mortality\n" +
// //     "| + Examples: Hypotension, sedation (anti-histamines),\n" +
// //     "| + hepatic failure (PCM), diarrhoea (antibiotic therapy)\n" +
// //     "A. Anticoagulants Bleeding,\n" +
// //     "1+ Beta blockers Bradycardia, *\n" +
// //     "+ Nitrates -Headache, *\n" +
// //     "+ Prazosin Postural hypotension.\n" +
// //     "| + Management? |\n" +
// //     "| + Reduce dose, stop therapy |\n",
// //   "Ba SN\n" +
// //     "en [mS\n" +
// //     "Type BADR |\n" +
// //     "* Bizzare, idiosyncratic, uncommon\n" +
// //     "* Dose independent, §\n" +
// //     "+ Unpredictable ted {nso\n" +
// //     "| + Not related to pharmacological actions i\n" +
// //     "| * High mortality\n" +
// //     "+ Patients’ peculiarities??\n" +
// //     "| Eg Aplastic anaemia (Chloramphenicol), |\n" +
// //     "| Anaphylaxis (Penicillins)...acute porphyria, G6PD |\n" +
// //     "[ deficiency |\n" +
// //     "+ Hypersensistivity reactions, IgE mediated\n" +
// //     ". Mgt?\n" +
// //     "i W\n" +
// //     "3\n" +
// //     "Ld If [=H=F=] jid\n" +
// //     "Le ree] a y th\n" +
// //     "| ee -\n",
// //   "me . ——\n" +
// //     "| Cc ———\n" +
// //     "|\n" +
// //     "Type C ADR\n" +
// //     "+ Chronic, long term/cumulative usage\n" +
// //     "* Dose & time related...\n" +
// //     "* Ocular toxicity (CQ), Fat redistribution |\n" +
// //     "(NRT), Breast cancers (O/C), analgesic\n" +
// //     "neuropathy\n" +
// //     "* Mgt? Reduce Dose, stop, gradual\n" +
// //     "withdrawal?\n" +
// //     "os\n" +
// //     ": 3 =H 21\n" +
// //     "| |\n",
// //   "| Type D ADR\n" +
// //     "\n" +
// //     "* D delayed effects -time related, uncommon,\n" +
// //     "apparent with time. Teratogenesis (vaginal\n" +
// //     "adenocarcinoma -diethystibestrol),\n" +
// //     "carcinogenesis (immuno-suppresants)\n" +
// //     "\n" +
// //     "* Chemotherapy - Secondary tumours *\n" +
// //     "\n" +
// //     "Phenytoin during pregnancy -Teratogenic\n" +
// //     "\n" +
// //     "effects\n" +
// //     "\n" +
// //     "* Antipsychotics - Tardive dyskinesia *\n" +
// //     "Analgesics -Nephropathy 1\n",
// //   "Types E ADR\n" +
// //     "* E end of treatment effects.. Uncommon, due\n" +
// //     "to withdrawal of drug\n" +
// //     "+ E.g. Phenytoin withdrawal -Seizures, gi\n" +
// //     "| + Corticosteroid withdrawal - Adrenocortical\n" +
// //     "insufficiency.\n" +
// //     "* Rebound effects with propranol, morphine,\n" +
// //     "opiates, benzod\n" +
// //     "* Mgt? Reintroduce, taper dose, withdraw\n" +
// //     "slowly fl |\n" +
// //     "—_— I pa S58\n",
// //   "Types F ADR\n" +
// //     "+ F: failure of therapy: Common, dose related,\n" +
// //     "drug interactions (Salbutamol/propranolol?\n" +
// //     "Enzyme inducers? |\n" +
// //     "* Mgt? dose, alternative txt?\n" +
// //     "|\n" +
// //     "1 == |\n" +
// //     "eT —\n",
// //   "E Immunologic vs Non immunologic ADR\n" +
// //     "| B * Drug reactions = all ADRs\n" +
// //     "a + Drug hypersensitivity immune-mediated ys\n" +
// //     ": I response drugs in sensitized patients.\n" +
// //     "Es. + Drug allergy IgE mediated reaction.\n" +
// //     "i » Immunologic vs non-immunologic\n" +
// //     "| + Predictable non-immune-high dose, D/D |\n" +
// //     "| + Unpredictable, nonimmune drug reactions can\n" +
// //     "seudoallergic (eg opiates), i\n" +
// //     "| {G6PD), intolerance (lower threshold e.g with\n" +
// //     "ASA) Ris\n",
// //   "¥\nImmunologic\n\ni -\na Co ok Jae Re 18\n",
// //   "| B Type 11, Cytotovic 1gGrIgM. onset-variable 4\n" +
// //     "\n" +
// //     "¥ + Specific IgG or IgM antibodies directed at\n" +
// //     "3 drug-hapten coated celle i\n" +
// //     "+ “Hapten hypothesis” {\n" +
// //     "F + Ig haemolytic anaemia (Pencilling), p\n" +
// //     ": thrombocytopacnia, Aminopyrine :\n" +
// //     "(agranulocytosis)\n" +
// //     "\n" +
// //     "i | -\n",
// //   "a be.\n" +
// //     ";\n" +
// //     "|\n" +
// //     "|\n" +
// //     "+ Type IV: Delayed hypersensitivity or cell | “\n" +
// //     "IE LE\n" +
// //     "ore atl SERNA. ag\n",
// //   "Other immune ADR\n" +
// //     "¢ Specific Torell activation Meatnfldorm rach from\n" +
// //     "eulfomarides\n" +
// //     "© Terie epadermal necrolyeie, drig-induced brpus-\n" +
// //     "likr eyndrome. Steven jnhineon syndromes,\n" +
// //     "] anticonvuluant byperemneitivity syndrome\n" +
// //     "«Auto immune [¥ Myatthenia gravic\n" +
// //     "po Ran F173 1 Fr\n" +
// //     "4 es 4 add\n" +
// //     "> ras 4 - - -—\n",
// //   "| — F\nSeverity of ADRs\n|\ni r2rarars\ni — %\n= g — pe . I ci pm :\n",
// //   "Mgt of ADR\n" +
// //     "\n" +
// //     "+ Discontinue the drug\n" +
// //     "\n" +
// //     "+ Change the drug therapy\n" +
// //     "\n" +
// //     "+ Modify the dose\n" +
// //     "\n" +
// //     "+ Hospital Admission\n" +
// //     "\n" +
// //     "+ Prolonged stay in a healthcare facility\n" +
// //     "\n" +
// //     "+ Supportive treatment\n" +
// //     "\n" +
// //     "+ Conselling L|\n" +
// //     "— ; a | i=\n" +
// //     "aad PN — ne = Ta\n",
// //   "p. EEE meyyy  So = oN aaa\n" +
// //     "Why study ADRs &\n" +
// //     "Pharmacovigilance?\n" +
// //     "\n" +
// //     "| + Patientsafety\n" +
// //     "| + Counseling/ drug use, Rfp\n" +
// //     "| + Rational use of drug... C/I drugs\n" +
// //     "+ Save time, resources, discomfort, lives\n" +
// //     "+ Research\n" +
// //     "Le F=f=r1=T1=\n" +
// //     "VEEP pa\n" +
// //     "NL . <\n",
// //   "|\n" +
// //     "LH % J a |\n" +
// //     ". Sf |\n" +
// //     "3 |\n" +
// //     "i] hs 3 ~\n" +
// //     "f | ro\n" +
// //     "Bs hd = on\n" +
// //     "| b :\n" +
// //     "; ni,\n" +
// //     "rar 8 J\n" +
// //     "j\n" +
// //     "[¥ Wo §:\n" +
// //     "( H i”. or a\n" +
// //     "[ \\ he Ce Ae | 7 n -\n" +
// //     "2 WV] i B\n",
// //   "$ = hk nd\n" +
// //     "Factors Responsible for ADRs\n" +
// //     "A. D/D interaction - Pharmacokinetic (ADME),\n" +
// //     "Pharmacodynamic (additive, synergistic,\n" +
// //     "antagonist), Poly Rx, dose/frequency Moa\n" +
// //     "B. Patient related factors/individual variations: ’\n" +
// //     "— | Age, sex, ater body weight/fat\n" +
// //     "| distribution, peculiarities...\n" +
// //     "| C. Social factors: race, alcohol/cigarette\n" +
// //     "consuption\n" +
// //     "| D. Disease states\n" +
// //     "| E. Drug related factors: narrow TI, duration,\n" +
// //     "formulation, route, manufacturing, prescribing,\n" +
// //     "| dispensing errors... PV Val\n" +
// //     "Intervoven... [\n" +
// //     '| 2 =F(="]=] = =\n' +
// //     "== _ ES P ’ ir] |\n" +
// //     "aw | Ee |\n",
// // ];

// // const output = await preProcessOcrOutput(ocrOutput);
// // console.log(output.join(" "));

// const text =
//   " a PL . - B Adverse Drug Reactions gE ADR, Pharmacovigilance, m Factors Affecting Drug Use Iniaghe L.O. BPharm, MSc, PhD June, 2024 w. TE Outline Overview- Important concepts Pharmacovigilance k ADR i TypesClasses of ADR Severity of ADR Factors Responsible for ADR Examples i : 1 R 1 - : Famous quotes.... All substances are poisons. there is none which is not a poison, the right dose differentiates a poison and a remedy Paracelsus, 1493 - 1541. Any substance that is capable of producing a therapeutic effect can also produce unwanted or adverse effects. a 1 Definition 1 An adverse drug reaction is a response to a drug which is noxious and unintended and occurs at doses normally used in man for prophylaxis, diagnosis, or therapy of disease or for the modification of physiologic function. WHO, 1973. 1 Definition 2 A harmful or significantly unpleasant effect caused by a drug at doses intended for therapeutic effector prophylaxis or diagnosis which warrants reduction of dose or withdrawal of the drug andor foretells hazard from future administration. Lawrence and Carpenter; 1998 EE Definition 3 An appreciably harmful or unpleasant reaction, resulting from an intervention related to the use of a medicinal product, which predicts hazard from future administration and warrants prevention or specific treatment, or alteration of the dosage regimen, or withdrawal of the product. Edwards and Aronson, 2000 Concepts Terminologies Occurs at therapeutic doses Beneficial SE? ADR vs side effects ADR vs toxic efects Unexpected adverse reaction Serious adverse effect Idiosyncratic, hypersensitive reactions ADR due to principal pharmacological activity vs t i Pharmacovigilance Predictable ADR . ADR from high doses TR A Pharmacovigilance Pharmacon Vigilare Fo pf nti a RAE 4 a 53 ages 3 ide. 3 ih ECan ve he ; - a IE BE Eo RV ! EAR pe Pharmacovigilance... Aka Drug Safety, study of ADR The practice of monitoring the effects of medical drugs after they have been licensed for use, especially in order to identify and evaluate previously unreported adverse reactions. Pharmacovigilance PV is defined as the science and activities relating to the detection, assessment, understanding and prevention of adverse effects or any other drug-related problem Pharmacovigilance the pharmacological science relating to the collection, detection, assessment, i monitoring, and prevention of adverse effects with pharmaceutical products - ; T WER Pharmacovigilance... Established by WHO for International Drug Monitoring in response to the thalidomide disaster detected in 1961. WHO in conjunction with WHO Collaborating Centre for International Drug Monitoring, Uppsala, promotes PV at the country level. At the end of 2010, 134 countries were part of the WHO PV Programme. BE 0 se Wile Pharmacovigilance... PVaims to: identify the hazards associated with the use of pharmaceutical products ed ills minimize the risk of any harm that may come 8 to patients - enhance patient care and patient safety in o relation to the use of medicines support public health programmes by i providing reliable, balanced information for i the effective assessment of the risk-benefit I profile of medicines. Sources of ADR information Information received from patients Health care providers via Mharmacovigilance agreements PVAs, Medical literature Drug information services I'harmaceutical Companies : i Ne n. a REp - A - SERN Th TE EERE iH 3 Pharmacovigilance Parlance LI .AOR Harm ' AE, fs : Individual Case Safety Risks Report ICSR Benefits Clinical trials Effectiveness vs Efficacy i real world vs CT Dechallengerechallenge Tree : Life-threateping Te jP - : ES oid x Types of ADR Type A Augmented BE B Bizzare C Chronic D Delayed effects 1 E end of use effect F Failure of therapy Rawlins Thompson, 19 i Lion IFfT1 EE ee a oT Corel a ADRclassffication Type A - Augmented Type B - Bizarre Type C - ChemicalChronic Type D - Delayed Type E - Exitend of useWithdrawal Type F - Familial Type G - Genetic Type H - Hypersensitivity Type A ADR Dose dependent, related to pharmacological action of the drug Predictable Common i Low mortality Examples: Hypotension, sedation anti-histamines, - if EE Biogas, ype A ADR Dose dependent, related to pharmacologic al action of the dmg Predictable Common Low mortality I EN EE Type A ADR Dose dependent, related to pharmacological action of the drug Predictable Common Low mortality Examples: Hypotension, sedation anti-histamines, hepatic failure PCM, diarrhoea antibiotic therapy A. Anticoagulants Bleeding, 1 Beta blockers Bradycardia, Nitrates -Headache, Prazosin Postural hypotension. Management? Reduce dose, stop therapy Ba SN en mS Type BADR Bizzare, idiosyncratic, uncommon Dose independent, Unpredictable ted nso Not related to pharmacological actions i High mortality Patients peculiarities?? Eg Aplastic anaemia Chloramphenicol, Anaphylaxis Penicillins...acute porphyria, G6PD deficiency Hypersensistivity reactions, IgE mediated . Mgt? i W 3Ld If HF jid Le ree a y th ee me . Cc Type C ADR Chronic, long termcumulative usage Dose time related... Ocular toxicity CQ, Fat redistribution NRT, Breast cancers OC, analgesic neuropathy Mgt? Reduce Dose, stop, gradual withdrawal? os : 3 H 21 Type D ADR D delayed effects -time related, uncommon, apparent with time. Teratogenesis vaginal adenocarcinoma -diethystibestrol, carcinogenesis immuno-suppresants Chemotherapy - Secondary tumours Phenytoin during pregnancy -Teratogenic effects Antipsychotics - Tardive dyskinesia Analgesics -Nephropathy 1 Types E ADR E end of treatment effects.. Uncommon, due to withdrawal of drug E.g. Phenytoin withdrawal -Seizures, gi Corticosteroid withdrawal - Adrenocortical insufficiency. Rebound effects with propranol, morphine, opiates, benzod Mgt? Reintroduce, taper dose, withdraw slowly fl _ I pa S58 Types F ADR F: failure of therapy: Common, dose related, drug interactions Salbutamolpropranolol? Enzyme inducers? Mgt? dose, alternative txt? 1 eT E Immunologic vs Non immunologic ADR B Drug reactions all ADRs a Drug hypersensitivity immune-mediated ys : I response drugs in sensitized patients. Es. Drug allergy IgE mediated reaction. i Immunologic vs non-immunologic Predictable non-immune-high dose, DD Unpredictable, nonimmune drug reactions can seudoallergic eg opiates, i G6PD, intolerance lower threshold e.g with ASA Ris Immunologic i a Co ok Jae Re 18 B Type 11, Cytotovic 1gGrIgM. onset-variable 4 Specific IgG or IgM antibodies directed at 3 drug-hapten coated celle i Hapten hypothesis F Ig haemolytic anaemia Pencilling, p : thrombocytopacnia, Aminopyrine : agranulocytosis i a be. ; Type IV: Delayed hypersensitivity or cell IE LE ore atl SERNA. ag Other immune ADR Specific Torell activation Meatnfldorm rach from eulfomarides Terie epadermal necrolyeie, drig-induced brpuslikr eyndrome. Steven jnhineon syndromes, anticonvuluant byperemneitivity syndrome Auto immune Myatthenia gravic po Ran F173 1 Fr 4 es 4 add ras 4 - - F Severity of ADRs i r2rarars i g pe . I ci pm : Mgt of ADR Discontinue the drug Change the drug therapy Modify the dose Hospital Admission Prolonged stay in a healthcare facility Supportive treatment Conselling L ; a i aad PN ne Ta p. EEE meyyy So oN aaa Why study ADRs Pharmacovigilance? Patientsafety Counseling drug use, Rfp Rational use of drug... CI drugs Save time, resources, discomfort, lives Research Le Ffr1T1 VEEP pa NL . LH J a . Sf 3 i hs 3 f ro Bs hd on b : ; ni, rar 8 J j Wo : H i. or a he Ce Ae 7 n 2 WV i B hk nd Factors Responsible for ADRs A. DD interaction - Pharmacokinetic ADME, Pharmacodynamic additive, synergistic, antagonist, Poly Rx, dosefrequency Moa B. Patient related factorsindividual variations: Age, sex, ater body weightfat distribution, peculiarities... C. Social factors: race, alcoholcigarette consuption D. Disease states E. Drug related factors: narrow TI, duration, formulation, route, manufacturing, prescribing, dispensing errors... PV Val Intervoven... 2 F _ ES P ir aw Ee";

// const chunks = await chunkText(text, 2096);

// console.log(chunks);