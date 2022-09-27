import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  folder=1;
  value= 0;
  probabilityvalue=Math.round(41.54947996);
  options: Options = {
    floor: 0,
    ceil: 99,
    hideLimitLabels: true,
    hidePointerLabels: true,
  };


  
  constructor() { }

  ngOnInit(): void {
    console.log(this.folder)
    console.log(this.value)

  }
  changefolder(){
    if(this.folder<6){
    this.folder+=1;
    }
    else{
      this.folder=1
    }
    console.log(this.folder);
  }
  probability_1:any[]=[{"step":0,"predicted_value":0.4154947996},
                    {"step":1,"predicted_value":0.4194677653},
                    {"step":2,"predicted_value":0.4234407309},
                    {"step":3,"predicted_value":0.4274136966},
                    {"step":4,"predicted_value":0.4313866623},
                    {"step":5,"predicted_value":0.4353596279},
                    {"step":6,"predicted_value":0.4393325936},
                    {"step":7,"predicted_value":0.4433055592},
                    {"step":8,"predicted_value":0.4472785249},
                    {"step":9,"predicted_value":0.4512514905},
                    {"step":10,"predicted_value":0.4552244562},
                    {"step":11,"predicted_value":0.4591974219},
                    {"step":12,"predicted_value":0.4631703875},
                    {"step":13,"predicted_value":0.4671433532},
                    {"step":14,"predicted_value":0.4711163188},
                    {"step":15,"predicted_value":0.4750892845},
                    {"step":16,"predicted_value":0.4790622502},
                    {"step":17,"predicted_value":0.4830352158},{"step":18,"predicted_value":0.4870081815},
                    {"step":19,"predicted_value":0.4909811471},{"step":20,"predicted_value":0.4949541128},{"step":21,"predicted_value":0.4989270785},
                    {"step":22,"predicted_value":0.5029000441},{"step":23,"predicted_value":0.5068730098},{"step":24,"predicted_value":0.5108459754},{"step":25,"predicted_value":0.5148189411},
                    {"step":26,"predicted_value":0.5187919068},{"step":27,"predicted_value":0.5227648724},
                    {"step":28,"predicted_value":0.5267378381},{"step":29,"predicted_value":0.5307108037},
                    {"step":30,"predicted_value":0.5346837694},{"step":31,"predicted_value":0.5386567351},{"step":32,"predicted_value":0.5426297007},{"step":33,"predicted_value":0.5466026664},
                    {"step":34,"predicted_value":0.550575632},{"step":35,"predicted_value":0.5545485977},{"step":36,"predicted_value":0.5585215634},{"step":37,"predicted_value":0.562494529},{"step":38,"predicted_value":0.5664674947},{"step":39,"predicted_value":0.5704404603},{"step":40,"predicted_value":0.574413426},{"step":41,"predicted_value":0.5783863917},{"step":42,"predicted_value":0.5823593573},{"step":43,"predicted_value":0.586332323},
                    {"step":44,"predicted_value":0.5903052886},{"step":45,"predicted_value":0.5942782543},{"step":46,"predicted_value":0.59825122},{"step":47,"predicted_value":0.6022241856},{"step":48,"predicted_value":0.6061971513},{"step":49,"predicted_value":0.6101701169},{"step":50,"predicted_value":0.6141430826},{"step":51,"predicted_value":0.6181160482},{"step":52,"predicted_value":0.6220890139},{"step":53,"predicted_value":0.6260619796},{"step":54,"predicted_value":0.6300349452},{"step":55,"predicted_value":0.6340079109},{"step":56,"predicted_value":0.6379808765},{"step":57,"predicted_value":0.6419538422},{"step":58,"predicted_value":0.6459268079},{"step":59,"predicted_value":0.6498997735},{"step":60,"predicted_value":0.6538727392},{"step":61,"predicted_value":0.6578457048},{"step":62,"predicted_value":0.6618186705},{"step":63,"predicted_value":0.6657916362},
                    {"step":64,"predicted_value":0.6697646018},{"step":65,"predicted_value":0.6737375675},
                    {"step":66,"predicted_value":0.6777105331},{"step":67,"predicted_value":0.6816834988},{"step":68,"predicted_value":0.6856564645},{"step":69,"predicted_value":0.6896294301},{"step":70,"predicted_value":0.6936023958},{"step":71,"predicted_value":0.6975753614},{"step":72,"predicted_value":0.7015483271},{"step":73,"predicted_value":0.7055212928},{"step":74,"predicted_value":0.7094942584},{"step":75,"predicted_value":0.7134672241},{"step":76,"predicted_value":0.7174401897},{"step":77,"predicted_value":0.7214131554},{"step":78,"predicted_value":0.7253861211},{"step":79,"predicted_value":0.7293590867},{"step":80,"predicted_value":0.7333320524},{"step":81,"predicted_value":0.737305018},{"step":82,"predicted_value":0.7412779837},{"step":83,"predicted_value":0.7452509494},{"step":84,"predicted_value":0.749223915},{"step":85,"predicted_value":0.7531968807},{"step":86,"predicted_value":0.7571698463},{"step":87,"predicted_value":0.761142812},{"step":88,"predicted_value":0.7651157777},{"step":89,"predicted_value":0.7690887433},{"step":90,"predicted_value":0.773061709},{"step":91,"predicted_value":0.7770346746},{"step":92,"predicted_value":0.7810076403},{"step":93,"predicted_value":0.7849806059},{"step":94,"predicted_value":0.7889535716},{"step":95,"predicted_value":0.7929265373},{"step":96,"predicted_value":0.7968995029},{"step":97,"predicted_value":0.8008724686},{"step":98,"predicted_value":0.8048454342},{"step":99,"predicted_value":0.8088183999}];

  probability_2= [{"step":0,"predicted_value":0.5143666863},{"step":1,"predicted_value":0.5167905363},{"step":2,"predicted_value":0.5192143863},
  {"step":3,"predicted_value":0.5216382363},{"step":4,"predicted_value":0.5240620862},{"step":5,"predicted_value":0.5264859362},
  {"step":6,"predicted_value":0.5289097862},{"step":7,"predicted_value":0.5313336362},{"step":8,"predicted_value":0.5337574861},{"step":9,"predicted_value":0.5361813361},{"step":10,"predicted_value":0.5386051861},{"step":11,"predicted_value":0.541029036},{"step":12,"predicted_value":0.543452886},{"step":13,"predicted_value":0.545876736},{"step":14,"predicted_value":0.548300586},{"step":15,"predicted_value":0.5507244359},{"step":16,"predicted_value":0.5531482859},{"step":17,"predicted_value":0.5555721359},{"step":18,"predicted_value":0.5579959859},{"step":19,"predicted_value":0.5604198358},{"step":20,"predicted_value":0.5628436858},{"step":21,"predicted_value":0.5652675358},{"step":22,"predicted_value":0.5676913857},{"step":23,"predicted_value":0.5701152357},{"step":24,"predicted_value":0.5725390857},{"step":25,"predicted_value":0.5749629357},{"step":26,"predicted_value":0.5773867856},{"step":27,"predicted_value":0.5798106356},{"step":28,"predicted_value":0.5822344856},{"step":29,"predicted_value":0.5846583356},{"step":30,"predicted_value":0.5870821855},
  {"step":31,"predicted_value":0.5895060355},{"step":32,"predicted_value":0.5919298855},{"step":33,"predicted_value":0.5943537354},{"step":34,"predicted_value":0.5967775854},{"step":35,"predicted_value":0.5992014354},{"step":36,"predicted_value":0.6016252854},{"step":37,"predicted_value":0.6040491353},{"step":38,"predicted_value":0.6064729853},{"step":39,"predicted_value":0.6088968353},{"step":40,"predicted_value":0.6113206853},
  {"step":41,"predicted_value":0.6137445352},{"step":42,"predicted_value":0.6161683852},{"step":43,"predicted_value":0.6185922352},{"step":44,"predicted_value":0.6210160851},{"step":45,"predicted_value":0.6234399351},{"step":46,"predicted_value":0.6258637851},{"step":47,"predicted_value":0.6282876351},{"step":48,"predicted_value":0.630711485},{"step":49,"predicted_value":0.633135335},{"step":50,"predicted_value":0.635559185},
  {"step":51,"predicted_value":0.637983035},{"step":52,"predicted_value":0.6404068849},{"step":53,"predicted_value":0.6428307349},{"step":54,"predicted_value":0.6452545849},{"step":55,"predicted_value":0.6476784348},{"step":56,"predicted_value":0.6501022848},{"step":57,"predicted_value":0.6525261348},{"step":58,"predicted_value":0.6549499848},{"step":59,"predicted_value":0.6573738347},{"step":60,"predicted_value":0.6597976847},
  {"step":61,"predicted_value":0.6622215347},{"step":62,"predicted_value":0.6646453847},{"step":63,"predicted_value":0.6670692346},{"step":64,"predicted_value":0.6694930846},{"step":65,"predicted_value":0.6719169346},{"step":66,"predicted_value":0.6743407845},{"step":67,"predicted_value":0.6767646345},{"step":68,"predicted_value":0.6791884845},{"step":69,"predicted_value":0.6816123345},{"step":70,"predicted_value":0.6840361844},
  {"step":71,"predicted_value":0.6864600344},{"step":72,"predicted_value":0.6888838844},{"step":73,"predicted_value":0.6913077344},{"step":74,"predicted_value":0.6937315843},{"step":75,"predicted_value":0.6961554343},{"step":76,"predicted_value":0.6985792843},{"step":77,"predicted_value":0.7010031343},{"step":78,"predicted_value":0.7034269842},{"step":79,"predicted_value":0.7058508342},{"step":80,"predicted_value":0.7082746842},
  {"step":81,"predicted_value":0.7106985341},{"step":82,"predicted_value":0.7131223841},{"step":83,"predicted_value":0.7155462341},{"step":84,"predicted_value":0.7179700841},{"step":85,"predicted_value":0.720393934},{"step":86,"predicted_value":0.722817784},{"step":87,"predicted_value":0.725241634},{"step":88,"predicted_value":0.727665484},{"step":89,"predicted_value":0.7300893339},{"step":90,"predicted_value":0.7325131839},{"step":91,"predicted_value":0.7349370339},{"step":92,"predicted_value":0.7373608838},{"step":93,"predicted_value":0.7397847338},{"step":94,"predicted_value":0.7422085838},{"step":95,"predicted_value":0.7446324338},{"step":96,"predicted_value":0.7470562837},{"step":97,"predicted_value":0.7494801337},{"step":98,"predicted_value":0.7519039837},{"step":99,"predicted_value":0.7543278337}];          
  
  
  probability_3=[{"step":0,"predicted_value":0.5556380749},{"step":1,"predicted_value":0.5580210017},{"step":2,"predicted_value":0.5604039286},{"step":3,"predicted_value":0.5627868555},{"step":4,"predicted_value":0.5651697823},{"step":5,"predicted_value":0.5675527092},{"step":6,"predicted_value":0.5699356361},{"step":7,"predicted_value":0.572318563},{"step":8,"predicted_value":0.5747014898},{"step":9,"predicted_value":0.5770844167},{"step":10,"predicted_value":0.5794673436},
  {"step":11,"predicted_value":0.5818502704},{"step":12,"predicted_value":0.5842331973},{"step":13,"predicted_value":0.5866161242},{"step":14,"predicted_value":0.588999051},{"step":15,"predicted_value":0.5913819779},{"step":16,"predicted_value":0.5937649048},{"step":17,"predicted_value":0.5961478316},{"step":18,"predicted_value":0.5985307585},{"step":19,"predicted_value":0.6009136854},{"step":20,"predicted_value":0.6032966122},
  {"step":21,"predicted_value":0.6056795391},{"step":22,"predicted_value":0.608062466},{"step":23,"predicted_value":0.6104453929},{"step":24,"predicted_value":0.6128283197},{"step":25,"predicted_value":0.6152112466},{"step":26,"predicted_value":0.6175941735},{"step":27,"predicted_value":0.6199771003},{"step":28,"predicted_value":0.6223600272},{"step":29,"predicted_value":0.6247429541},{"step":30,"predicted_value":0.6271258809},
  {"step":31,"predicted_value":0.6295088078},{"step":32,"predicted_value":0.6318917347},{"step":33,"predicted_value":0.6342746615},{"step":34,"predicted_value":0.6366575884},{"step":35,"predicted_value":0.6390405153},{"step":36,"predicted_value":0.6414234421},{"step":37,"predicted_value":0.643806369},{"step":38,"predicted_value":0.6461892959},{"step":39,"predicted_value":0.6485722228},{"step":40,"predicted_value":0.6509551496},
  {"step":41,"predicted_value":0.6533380765},{"step":42,"predicted_value":0.6557210034},{"step":43,"predicted_value":0.6581039302},{"step":44,"predicted_value":0.6604868571},{"step":45,"predicted_value":0.662869784},{"step":46,"predicted_value":0.6652527108},{"step":47,"predicted_value":0.6676356377},{"step":48,"predicted_value":0.6700185646},{"step":49,"predicted_value":0.6724014914},{"step":50,"predicted_value":0.6747844183},
  {"step":51,"predicted_value":0.6771673452},{"step":52,"predicted_value":0.679550272},{"step":53,"predicted_value":0.6819331989},{"step":54,"predicted_value":0.6843161258},{"step":55,"predicted_value":0.6866990527},{"step":56,"predicted_value":0.6890819795},{"step":57,"predicted_value":0.6914649064},{"step":58,"predicted_value":0.6938478333},{"step":59,"predicted_value":0.6962307601},{"step":60,"predicted_value":0.698613687},
  {"step":61,"predicted_value":0.7009966139},{"step":62,"predicted_value":0.7033795407},{"step":63,"predicted_value":0.7057624676},{"step":64,"predicted_value":0.7081453945},{"step":65,"predicted_value":0.7105283213},{"step":66,"predicted_value":0.7129112482},{"step":67,"predicted_value":0.7152941751},{"step":68,"predicted_value":0.7176771019},{"step":69,"predicted_value":0.7200600288},{"step":70,"predicted_value":0.7224429557},
  {"step":71,"predicted_value":0.7248258826},{"step":72,"predicted_value":0.7272088094},{"step":73,"predicted_value":0.7295917363},{"step":74,"predicted_value":0.7319746632},{"step":75,"predicted_value":0.73435759},{"step":76,"predicted_value":0.7367405169},{"step":77,"predicted_value":0.7391234438},{"step":78,"predicted_value":0.7415063706},{"step":79,"predicted_value":0.7438892975},{"step":80,"predicted_value":0.7462722244},
  {"step":81,"predicted_value":0.7486551512},{"step":82,"predicted_value":0.7510380781},{"step":83,"predicted_value":0.753421005},{"step":84,"predicted_value":0.7558039318},{"step":85,"predicted_value":0.7581868587},{"step":86,"predicted_value":0.7605697856},{"step":87,"predicted_value":0.7629527124},{"step":88,"predicted_value":0.7653356393},{"step":89,"predicted_value":0.7677185662},{"step":90,"predicted_value":0.7701014931},
  {"step":91,"predicted_value":0.7724844199},{"step":92,"predicted_value":0.7748673468},{"step":93,"predicted_value":0.7772502737},{"step":94,"predicted_value":0.7796332005},{"step":95,"predicted_value":0.7820161274},{"step":96,"predicted_value":0.7843990543},{"step":97,"predicted_value":0.7867819811},{"step":98,"predicted_value":0.789164908},{"step":99,"predicted_value":0.7915478349}];
  

  probability_4=[{"step":0,"predicted_value":0.5660538077},{"step":1,"predicted_value":0.5679593435},{"step":2,"predicted_value":0.5698648794},{"step":3,"predicted_value":0.5717704152},{"step":4,"predicted_value":0.573675951},{"step":5,"predicted_value":0.5755814868},{"step":6,"predicted_value":0.5774870226},{"step":7,"predicted_value":0.5793925584},{"step":8,"predicted_value":0.5812980942},{"step":9,"predicted_value":0.58320363},{"step":10,"predicted_value":0.5851091658},
  {"step":11,"predicted_value":0.5870147016},{"step":12,"predicted_value":0.5889202374},{"step":13,"predicted_value":0.5908257732},{"step":14,"predicted_value":0.5927313091},{"step":15,"predicted_value":0.5946368449},{"step":16,"predicted_value":0.5965423807},{"step":17,"predicted_value":0.5984479165},{"step":18,"predicted_value":0.6003534523},{"step":19,"predicted_value":0.6022589881},{"step":20,"predicted_value":0.6041645239},
  {"step":21,"predicted_value":0.6060700597},{"step":22,"predicted_value":0.6079755955},{"step":23,"predicted_value":0.6098811313},{"step":24,"predicted_value":0.6117866671},{"step":25,"predicted_value":0.613692203},{"step":26,"predicted_value":0.6155977388},{"step":27,"predicted_value":0.6175032746},{"step":28,"predicted_value":0.6194088104},{"step":29,"predicted_value":0.6213143462},{"step":30,"predicted_value":0.623219882},
  {"step":31,"predicted_value":0.6251254178},{"step":32,"predicted_value":0.6270309536},{"step":33,"predicted_value":0.6289364894},{"step":34,"predicted_value":0.6308420252},{"step":35,"predicted_value":0.632747561},{"step":36,"predicted_value":0.6346530968},{"step":37,"predicted_value":0.6365586327},{"step":38,"predicted_value":0.6384641685},{"step":39,"predicted_value":0.6403697043},{"step":40,"predicted_value":0.6422752401},
  {"step":41,"predicted_value":0.6441807759},{"step":42,"predicted_value":0.6460863117},{"step":43,"predicted_value":0.6479918475},{"step":44,"predicted_value":0.6498973833},{"step":45,"predicted_value":0.6518029191},{"step":46,"predicted_value":0.6537084549},{"step":47,"predicted_value":0.6556139907},{"step":48,"predicted_value":0.6575195266},{"step":49,"predicted_value":0.6594250624},{"step":50,"predicted_value":0.6613305982},{"step":51,"predicted_value":0.663236134},{"step":52,"predicted_value":0.6651416698},{"step":53,"predicted_value":0.6670472056},{"step":54,"predicted_value":0.6689527414},{"step":55,"predicted_value":0.6708582772},{"step":56,"predicted_value":0.672763813},{"step":57,"predicted_value":0.6746693488},{"step":58,"predicted_value":0.6765748846},{"step":59,"predicted_value":0.6784804204},{"step":60,"predicted_value":0.6803859563},
  {"step":61,"predicted_value":0.6822914921},{"step":62,"predicted_value":0.6841970279},{"step":63,"predicted_value":0.6861025637},{"step":64,"predicted_value":0.6880080995},{"step":65,"predicted_value":0.6899136353},{"step":66,"predicted_value":0.6918191711},{"step":67,"predicted_value":0.6937247069},{"step":68,"predicted_value":0.6956302427},{"step":69,"predicted_value":0.6975357785},{"step":70,"predicted_value":0.6994413143},
  {"step":71,"predicted_value":0.7013468502},{"step":72,"predicted_value":0.703252386},{"step":73,"predicted_value":0.7051579218},{"step":74,"predicted_value":0.7070634576},{"step":75,"predicted_value":0.7089689934},{"step":76,"predicted_value":0.7108745292},{"step":77,"predicted_value":0.712780065},{"step":78,"predicted_value":0.7146856008},{"step":79,"predicted_value":0.7165911366},{"step":80,"predicted_value":0.7184966724},
  {"step":81,"predicted_value":0.7204022082},{"step":82,"predicted_value":0.7223077441},{"step":83,"predicted_value":0.7242132799},{"step":84,"predicted_value":0.7261188157},{"step":85,"predicted_value":0.7280243515},{"step":86,"predicted_value":0.7299298873},{"step":87,"predicted_value":0.7318354231},{"step":88,"predicted_value":0.7337409589},{"step":89,"predicted_value":0.7356464947},{"step":90,"predicted_value":0.7375520305},
  {"step":91,"predicted_value":0.7394575663},{"step":92,"predicted_value":0.7413631021},{"step":93,"predicted_value":0.7432686379},{"step":94,"predicted_value":0.7451741738},{"step":95,"predicted_value":0.7470797096},{"step":96,"predicted_value":0.7489852454},{"step":97,"predicted_value":0.7508907812},{"step":98,"predicted_value":0.752796317},{"step":99,"predicted_value":0.7547018528}]
  
  
  probability_5=[{"step":0,"predicted_value":0.6676259637},{"step":1,"predicted_value":0.6690536972},{"step":2,"predicted_value":0.6704814308},{"step":3,"predicted_value":0.6719091643},{"step":4,"predicted_value":0.6733368978},{"step":5,"predicted_value":0.6747646314},{"step":6,"predicted_value":0.6761923649},{"step":7,"predicted_value":0.6776200984},{"step":8,"predicted_value":0.679047832},{"step":9,"predicted_value":0.6804755655},{"step":10,"predicted_value":0.6819032991},
  {"step":11,"predicted_value":0.6833310326},{"step":12,"predicted_value":0.6847587661},{"step":13,"predicted_value":0.6861864997},{"step":14,"predicted_value":0.6876142332},{"step":15,"predicted_value":0.6890419667},{"step":16,"predicted_value":0.6904697003},{"step":17,"predicted_value":0.6918974338},{"step":18,"predicted_value":0.6933251674},{"step":19,"predicted_value":0.6947529009},{"step":20,"predicted_value":0.6961806344},{"step":21,"predicted_value":0.697608368},{"step":22,"predicted_value":0.6990361015},{"step":23,"predicted_value":0.700463835},{"step":24,"predicted_value":0.7018915686},{"step":25,"predicted_value":0.7033193021},{"step":26,"predicted_value":0.7047470356},{"step":27,"predicted_value":0.7061747692},{"step":28,"predicted_value":0.7076025027},{"step":29,"predicted_value":0.7090302363},{"step":30,"predicted_value":0.7104579698},{"step":31,"predicted_value":0.7118857033},{"step":32,"predicted_value":0.7133134369},{"step":33,"predicted_value":0.7147411704},{"step":34,"predicted_value":0.7161689039},{"step":35,"predicted_value":0.7175966375},{"step":36,"predicted_value":0.719024371},{"step":37,"predicted_value":0.7204521046},{"step":38,"predicted_value":0.7218798381},{"step":39,"predicted_value":0.7233075716},{"step":40,"predicted_value":0.7247353052},
  {"step":41,"predicted_value":0.7261630387},{"step":42,"predicted_value":0.7275907722},{"step":43,"predicted_value":0.7290185058},{"step":44,"predicted_value":0.7304462393},{"step":45,"predicted_value":0.7318739728},{"step":46,"predicted_value":0.7333017064},{"step":47,"predicted_value":0.7347294399},{"step":48,"predicted_value":0.7361571735},{"step":49,"predicted_value":0.737584907},{"step":50,"predicted_value":0.7390126405},
  {"step":51,"predicted_value":0.7404403741},{"step":52,"predicted_value":0.7418681076},{"step":53,"predicted_value":0.7432958411},{"step":54,"predicted_value":0.7447235747},{"step":55,"predicted_value":0.7461513082},{"step":56,"predicted_value":0.7475790418},{"step":57,"predicted_value":0.7490067753},{"step":58,"predicted_value":0.7504345088},{"step":59,"predicted_value":0.7518622424},{"step":60,"predicted_value":0.7532899759},{"step":61,"predicted_value":0.7547177094},{"step":62,"predicted_value":0.756145443},{"step":63,"predicted_value":0.7575731765},{"step":64,"predicted_value":0.7590009101},{"step":65,"predicted_value":0.7604286436},{"step":66,"predicted_value":0.7618563771},{"step":67,"predicted_value":0.7632841107},{"step":68,"predicted_value":0.7647118442},{"step":69,"predicted_value":0.7661395777},{"step":70,"predicted_value":0.7675673113},
  {"step":71,"predicted_value":0.7689950448},{"step":72,"predicted_value":0.7704227783},{"step":73,"predicted_value":0.7718505119},{"step":74,"predicted_value":0.7732782454},{"step":75,"predicted_value":0.774705979},{"step":76,"predicted_value":0.7761337125},{"step":77,"predicted_value":0.777561446},{"step":78,"predicted_value":0.7789891796},{"step":79,"predicted_value":0.7804169131},{"step":80,"predicted_value":0.7818446466},
  {"step":81,"predicted_value":0.7832723802},{"step":82,"predicted_value":0.7847001137},{"step":83,"predicted_value":0.7861278473},{"step":84,"predicted_value":0.7875555808},{"step":85,"predicted_value":0.7889833143},{"step":86,"predicted_value":0.7904110479},{"step":87,"predicted_value":0.7918387814},{"step":88,"predicted_value":0.7932665149},{"step":89,"predicted_value":0.7946942485},{"step":90,"predicted_value":0.796121982},
  {"step":91,"predicted_value":0.7975497155},{"step":92,"predicted_value":0.7989774491},{"step":93,"predicted_value":0.8004051826},{"step":94,"predicted_value":0.8018329162},{"step":95,"predicted_value":0.8032606497},{"step":96,"predicted_value":0.8046883832},{"step":97,"predicted_value":0.8061161168},{"step":98,"predicted_value":0.8075438503},{"step":99,"predicted_value":0.8089715838}]
  
  probability_6=[{"step":0,"predicted_value":0.6938875914},{"step":1,"predicted_value":0.6948505971},{"step":2,"predicted_value":0.6958136029},{"step":3,"predicted_value":0.6967766086},{"step":4,"predicted_value":0.6977396144},{"step":5,"predicted_value":0.6987026201},{"step":6,"predicted_value":0.6996656259},{"step":7,"predicted_value":0.7006286316},{"step":8,"predicted_value":0.7015916374},{"step":9,"predicted_value":0.7025546432},{"step":10,"predicted_value":0.7035176489},
  {"step":11,"predicted_value":0.7044806547},{"step":12,"predicted_value":0.7054436604},{"step":13,"predicted_value":0.7064066662},{"step":14,"predicted_value":0.7073696719},{"step":15,"predicted_value":0.7083326777},{"step":16,"predicted_value":0.7092956834},{"step":17,"predicted_value":0.7102586892},{"step":18,"predicted_value":0.7112216949},{"step":19,"predicted_value":0.7121847007},{"step":20,"predicted_value":0.7131477065},{"step":21,"predicted_value":0.7141107122},{"step":22,"predicted_value":0.715073718},{"step":23,"predicted_value":0.7160367237},{"step":24,"predicted_value":0.7169997295},{"step":25,"predicted_value":0.7179627352},{"step":26,"predicted_value":0.718925741},{"step":27,"predicted_value":0.7198887467},{"step":28,"predicted_value":0.7208517525},{"step":29,"predicted_value":0.7218147582},{"step":30,"predicted_value":0.722777764},
  {"step":31,"predicted_value":0.7237407698},{"step":32,"predicted_value":0.7247037755},{"step":33,"predicted_value":0.7256667813},{"step":34,"predicted_value":0.726629787},{"step":35,"predicted_value":0.7275927928},{"step":36,"predicted_value":0.7285557985},{"step":37,"predicted_value":0.7295188043},{"step":38,"predicted_value":0.73048181},{"step":39,"predicted_value":0.7314448158},{"step":40,"predicted_value":0.7324078215},{"step":41,"predicted_value":0.7333708273},{"step":42,"predicted_value":0.7343338331},{"step":43,"predicted_value":0.7352968388},{"step":44,"predicted_value":0.7362598446},{"step":45,"predicted_value":0.7372228503},{"step":46,"predicted_value":0.7381858561},{"step":47,"predicted_value":0.7391488618},{"step":48,"predicted_value":0.7401118676},{"step":49,"predicted_value":0.7410748733},{"step":50,"predicted_value":0.7420378791},
  {"step":51,"predicted_value":0.7430008849},{"step":52,"predicted_value":0.7439638906},{"step":53,"predicted_value":0.7449268964},{"step":54,"predicted_value":0.7458899021},{"step":55,"predicted_value":0.7468529079},{"step":56,"predicted_value":0.7478159136},{"step":57,"predicted_value":0.7487789194},{"step":58,"predicted_value":0.7497419251},{"step":59,"predicted_value":0.7507049309},{"step":60,"predicted_value":0.7516679366},{"step":61,"predicted_value":0.7526309424},{"step":62,"predicted_value":0.7535939482},{"step":63,"predicted_value":0.7545569539},{"step":64,"predicted_value":0.7555199597},{"step":65,"predicted_value":0.7564829654},{"step":66,"predicted_value":0.7574459712},{"step":67,"predicted_value":0.7584089769},{"step":68,"predicted_value":0.7593719827},{"step":69,"predicted_value":0.7603349884},{"step":70,"predicted_value":0.7612979942},
 {"step":71,"predicted_value":0.7622609999},{"step":72,"predicted_value":0.7632240057},{"step":73,"predicted_value":0.7641870115},{"step":74,"predicted_value":0.7651500172},{"step":75,"predicted_value":0.766113023},{"step":76,"predicted_value":0.7670760287},{"step":77,"predicted_value":0.7680390345},{"step":78,"predicted_value":0.7690020402},{"step":79,"predicted_value":0.769965046},{"step":80,"predicted_value":0.7709280517},{"step":81,"predicted_value":0.7718910575},{"step":82,"predicted_value":0.7728540632},{"step":83,"predicted_value":0.773817069},{"step":84,"predicted_value":0.7747800748},{"step":85,"predicted_value":0.7757430805},{"step":86,"predicted_value":0.7767060863},{"step":87,"predicted_value":0.777669092},{"step":88,"predicted_value":0.7786320978},{"step":89,"predicted_value":0.7795951035},{"step":90,"predicted_value":0.7805581093},
 {"step":91,"predicted_value":0.781521115},{"step":92,"predicted_value":0.7824841208},{"step":93,"predicted_value":0.7834471265},{"step":94,"predicted_value":0.7844101323},{"step":95,"predicted_value":0.7853731381},{"step":96,"predicted_value":0.7863361438},{"step":97,"predicted_value":0.7872991496},{"step":98,"predicted_value":0.7882621553},{"step":99,"predicted_value":0.7892251611}]


  changeimage(){
      // this.probabilityvalue=this.probability[this.value].predicted_value*100;
      console.log(this.value);
      if(this.folder==1){
        this.probabilityvalue=Math.round((this.probability_1[this.value].predicted_value)*100);
      }
      else if(this.folder==2){
        this.probabilityvalue=Math.round((this.probability_2[this.value].predicted_value)*100);
      }
      else if(this.folder==3){
        this.probabilityvalue=Math.round((this.probability_3[this.value].predicted_value)*100);
      }
      else if(this.folder==4){
        this.probabilityvalue=Math.round((this.probability_4[this.value].predicted_value)*100);
      }
      else if(this.folder==5){
        this.probabilityvalue=Math.round((this.probability_5[this.value].predicted_value)*100);
      }
      else if(this.folder==6){
        this.probabilityvalue=Math.round((this.probability_6[this.value].predicted_value)*100);
      }
      
  }

}
