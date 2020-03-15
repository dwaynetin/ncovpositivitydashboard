import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryMapService {

  constructor() {}
  
  csvToJson = [
    {
      "country": "Afghanistan",
      "Alpha-2 code": "AF",
      "Alpha-3 code": "AFG",
      "Numeric": 4
    },
    {
      "country": "Albania",
      "Alpha-2 code": "AL",
      "Alpha-3 code": "ALB",
      "Numeric": 8
    },
    {
      "country": "Algeria",
      "Alpha-2 code": "DZ",
      "Alpha-3 code": "DZA",
      "Numeric": 12
    },
    {
      "country": "American Samoa",
      "Alpha-2 code": "AS",
      "Alpha-3 code": "ASM",
      "Numeric": 16
    },
    {
      "country": "Andorra",
      "Alpha-2 code": "AD",
      "Alpha-3 code": "AND",
      "Numeric": 20
    },
    {
      "country": "Angola",
      "Alpha-2 code": "AO",
      "Alpha-3 code": "AGO",
      "Numeric": 24
    },
    {
      "country": "Anguilla",
      "Alpha-2 code": "AI",
      "Alpha-3 code": "AIA",
      "Numeric": 660
    },
    {
      "country": "Antarctica",
      "Alpha-2 code": "AQ",
      "Alpha-3 code": "ATA",
      "Numeric": 10
    },
    {
      "country": "Antigua and Barbuda",
      "Alpha-2 code": "AG",
      "Alpha-3 code": "ATG",
      "Numeric": 28
    },
    {
      "country": "Argentina",
      "Alpha-2 code": "AR",
      "Alpha-3 code": "ARG",
      "Numeric": 32
    },
    {
      "country": "Armenia",
      "Alpha-2 code": "AM",
      "Alpha-3 code": "ARM",
      "Numeric": 51
    },
    {
      "country": "Aruba",
      "Alpha-2 code": "AW",
      "Alpha-3 code": "ABW",
      "Numeric": 533
    },
    {
      "country": "Australia",
      "Alpha-2 code": "AU",
      "Alpha-3 code": "AUS",
      "Numeric": 36
    },
    {
      "country": "Austria",
      "Alpha-2 code": "AT",
      "Alpha-3 code": "AUT",
      "Numeric": 40
    },
    {
      "country": "Azerbaijan",
      "Alpha-2 code": "AZ",
      "Alpha-3 code": "AZE",
      "Numeric": 31
    },
    {
      "country": "Bahamas (the)",
      "Alpha-2 code": "BS",
      "Alpha-3 code": "BHS",
      "Numeric": 44
    },
    {
      "country": "Bahrain",
      "Alpha-2 code": "BH",
      "Alpha-3 code": "BHR",
      "Numeric": 48
    },
    {
      "country": "Bangladesh",
      "Alpha-2 code": "BD",
      "Alpha-3 code": "BGD",
      "Numeric": 50
    },
    {
      "country": "Barbados",
      "Alpha-2 code": "BB",
      "Alpha-3 code": "BRB",
      "Numeric": 52
    },
    {
      "country": "Belarus",
      "Alpha-2 code": "BY",
      "Alpha-3 code": "BLR",
      "Numeric": 112
    },
    {
      "country": "Belgium",
      "Alpha-2 code": "BE",
      "Alpha-3 code": "BEL",
      "Numeric": 56
    },
    {
      "country": "Belize",
      "Alpha-2 code": "BZ",
      "Alpha-3 code": "BLZ",
      "Numeric": 84
    },
    {
      "country": "Benin",
      "Alpha-2 code": "BJ",
      "Alpha-3 code": "BEN",
      "Numeric": 204
    },
    {
      "country": "Bermuda",
      "Alpha-2 code": "BM",
      "Alpha-3 code": "BMU",
      "Numeric": 60
    },
    {
      "country": "Bhutan",
      "Alpha-2 code": "BT",
      "Alpha-3 code": "BTN",
      "Numeric": 64
    },
    {
      "country": "Bolivia (Plurinational State of)",
      "Alpha-2 code": "BO",
      "Alpha-3 code": "BOL",
      "Numeric": 68
    },
    {
      "country": "Bonaire, Sint Eustatius and Saba",
      "Alpha-2 code": "BQ",
      "Alpha-3 code": "BES",
      "Numeric": 535
    },
    {
      "country": "Bosnia and Herzegovina",
      "Alpha-2 code": "BA",
      "Alpha-3 code": "BIH",
      "Numeric": 70
    },
    {
      "country": "Botswana",
      "Alpha-2 code": "BW",
      "Alpha-3 code": "BWA",
      "Numeric": 72
    },
    {
      "country": "Bouvet Island",
      "Alpha-2 code": "BV",
      "Alpha-3 code": "BVT",
      "Numeric": 74
    },
    {
      "country": "Brazil",
      "Alpha-2 code": "BR",
      "Alpha-3 code": "BRA",
      "Numeric": 76
    },
    {
      "country": "British Indian Ocean Territory (the)",
      "Alpha-2 code": "IO",
      "Alpha-3 code": "IOT",
      "Numeric": 86
    },
    {
      "country": "Brunei Darussalam",
      "Alpha-2 code": "BN",
      "Alpha-3 code": "BRN",
      "Numeric": 96
    },
    {
      "country": "Bulgaria",
      "Alpha-2 code": "BG",
      "Alpha-3 code": "BGR",
      "Numeric": 100
    },
    {
      "country": "Burkina Faso",
      "Alpha-2 code": "BF",
      "Alpha-3 code": "BFA",
      "Numeric": 854
    },
    {
      "country": "Burundi",
      "Alpha-2 code": "BI",
      "Alpha-3 code": "BDI",
      "Numeric": 108
    },
    {
      "country": "Cabo Verde",
      "Alpha-2 code": "CV",
      "Alpha-3 code": "CPV",
      "Numeric": 132
    },
    {
      "country": "Cambodia",
      "Alpha-2 code": "KH",
      "Alpha-3 code": "KHM",
      "Numeric": 116
    },
    {
      "country": "Cameroon",
      "Alpha-2 code": "CM",
      "Alpha-3 code": "CMR",
      "Numeric": 120
    },
    {
      "country": "Canada",
      "Alpha-2 code": "CA",
      "Alpha-3 code": "CAN",
      "Numeric": 124
    },
    {
      "country": "Cayman Islands (the)",
      "Alpha-2 code": "KY",
      "Alpha-3 code": "CYM",
      "Numeric": 136
    },
    {
      "country": "Central African Republic (the)",
      "Alpha-2 code": "CF",
      "Alpha-3 code": "CAF",
      "Numeric": 140
    },
    {
      "country": "Chad",
      "Alpha-2 code": "TD",
      "Alpha-3 code": "TCD",
      "Numeric": 148
    },
    {
      "country": "Chile",
      "Alpha-2 code": "CL",
      "Alpha-3 code": "CHL",
      "Numeric": 152
    },
    {
      "country": "China",
      "Alpha-2 code": "CN",
      "Alpha-3 code": "CHN",
      "Numeric": 156
    },
    {
      "country": "Christmas Island",
      "Alpha-2 code": "CX",
      "Alpha-3 code": "CXR",
      "Numeric": 162
    },
    {
      "country": "Cocos (Keeling) Islands (the)",
      "Alpha-2 code": "CC",
      "Alpha-3 code": "CCK",
      "Numeric": 166
    },
    {
      "country": "Colombia",
      "Alpha-2 code": "CO",
      "Alpha-3 code": "COL",
      "Numeric": 170
    },
    {
      "country": "Comoros (the)",
      "Alpha-2 code": "KM",
      "Alpha-3 code": "COM",
      "Numeric": 174
    },
    {
      "country": "Congo (the Democratic Republic of the)",
      "Alpha-2 code": "CD",
      "Alpha-3 code": "COD",
      "Numeric": 180
    },
    {
      "country": "Congo (the)",
      "Alpha-2 code": "CG",
      "Alpha-3 code": "COG",
      "Numeric": 178
    },
    {
      "country": "Cook Islands (the)",
      "Alpha-2 code": "CK",
      "Alpha-3 code": "COK",
      "Numeric": 184
    },
    {
      "country": "Costa Rica",
      "Alpha-2 code": "CR",
      "Alpha-3 code": "CRI",
      "Numeric": 188
    },
    {
      "country": "Croatia",
      "Alpha-2 code": "HR",
      "Alpha-3 code": "HRV",
      "Numeric": 191
    },
    {
      "country": "Cuba",
      "Alpha-2 code": "CU",
      "Alpha-3 code": "CUB",
      "Numeric": 192
    },
    {
      "country": "Curaçao",
      "Alpha-2 code": "CW",
      "Alpha-3 code": "CUW",
      "Numeric": 531
    },
    {
      "country": "Cyprus",
      "Alpha-2 code": "CY",
      "Alpha-3 code": "CYP",
      "Numeric": 196
    },
    {
      "country": "Czechia",
      "Alpha-2 code": "CZ",
      "Alpha-3 code": "CZE",
      "Numeric": 203
    },
    {
      "country": "Côte d'Ivoire",
      "Alpha-2 code": "CI",
      "Alpha-3 code": "CIV",
      "Numeric": 384
    },
    {
      "country": "Denmark",
      "Alpha-2 code": "DK",
      "Alpha-3 code": "DNK",
      "Numeric": 208
    },
    {
      "country": "Djibouti",
      "Alpha-2 code": "DJ",
      "Alpha-3 code": "DJI",
      "Numeric": 262
    },
    {
      "country": "Dominica",
      "Alpha-2 code": "DM",
      "Alpha-3 code": "DMA",
      "Numeric": 212
    },
    {
      "country": "Dominican Republic (the)",
      "Alpha-2 code": "DO",
      "Alpha-3 code": "DOM",
      "Numeric": 214
    },
    {
      "country": "Ecuador",
      "Alpha-2 code": "EC",
      "Alpha-3 code": "ECU",
      "Numeric": 218
    },
    {
      "country": "Egypt",
      "Alpha-2 code": "EG",
      "Alpha-3 code": "EGY",
      "Numeric": 818
    },
    {
      "country": "El Salvador",
      "Alpha-2 code": "SV",
      "Alpha-3 code": "SLV",
      "Numeric": 222
    },
    {
      "country": "Equatorial Guinea",
      "Alpha-2 code": "GQ",
      "Alpha-3 code": "GNQ",
      "Numeric": 226
    },
    {
      "country": "Eritrea",
      "Alpha-2 code": "ER",
      "Alpha-3 code": "ERI",
      "Numeric": 232
    },
    {
      "country": "Estonia",
      "Alpha-2 code": "EE",
      "Alpha-3 code": "EST",
      "Numeric": 233
    },
    {
      "country": "Eswatini",
      "Alpha-2 code": "SZ",
      "Alpha-3 code": "SWZ",
      "Numeric": 748
    },
    {
      "country": "Ethiopia",
      "Alpha-2 code": "ET",
      "Alpha-3 code": "ETH",
      "Numeric": 231
    },
    {
      "country": "Falkland Islands (the) [Malvinas]",
      "Alpha-2 code": "FK",
      "Alpha-3 code": "FLK",
      "Numeric": 238
    },
    {
      "country": "Faroe Islands (the)",
      "Alpha-2 code": "FO",
      "Alpha-3 code": "FRO",
      "Numeric": 234
    },
    {
      "country": "Fiji",
      "Alpha-2 code": "FJ",
      "Alpha-3 code": "FJI",
      "Numeric": 242
    },
    {
      "country": "Finland",
      "Alpha-2 code": "FI",
      "Alpha-3 code": "FIN",
      "Numeric": 246
    },
    {
      "country": "France",
      "Alpha-2 code": "FR",
      "Alpha-3 code": "FRA",
      "Numeric": 250
    },
    {
      "country": "French Guiana",
      "Alpha-2 code": "GF",
      "Alpha-3 code": "GUF",
      "Numeric": 254
    },
    {
      "country": "French Polynesia",
      "Alpha-2 code": "PF",
      "Alpha-3 code": "PYF",
      "Numeric": 258
    },
    {
      "country": "French Southern Territories (the)",
      "Alpha-2 code": "TF",
      "Alpha-3 code": "ATF",
      "Numeric": 260
    },
    {
      "country": "Gabon",
      "Alpha-2 code": "GA",
      "Alpha-3 code": "GAB",
      "Numeric": 266
    },
    {
      "country": "Gambia (the)",
      "Alpha-2 code": "GM",
      "Alpha-3 code": "GMB",
      "Numeric": 270
    },
    {
      "country": "Georgia",
      "Alpha-2 code": "GE",
      "Alpha-3 code": "GEO",
      "Numeric": 268
    },
    {
      "country": "Germany",
      "Alpha-2 code": "DE",
      "Alpha-3 code": "DEU",
      "Numeric": 276
    },
    {
      "country": "Ghana",
      "Alpha-2 code": "GH",
      "Alpha-3 code": "GHA",
      "Numeric": 288
    },
    {
      "country": "Gibraltar",
      "Alpha-2 code": "GI",
      "Alpha-3 code": "GIB",
      "Numeric": 292
    },
    {
      "country": "Greece",
      "Alpha-2 code": "GR",
      "Alpha-3 code": "GRC",
      "Numeric": 300
    },
    {
      "country": "Greenland",
      "Alpha-2 code": "GL",
      "Alpha-3 code": "GRL",
      "Numeric": 304
    },
    {
      "country": "Grenada",
      "Alpha-2 code": "GD",
      "Alpha-3 code": "GRD",
      "Numeric": 308
    },
    {
      "country": "Guadeloupe",
      "Alpha-2 code": "GP",
      "Alpha-3 code": "GLP",
      "Numeric": 312
    },
    {
      "country": "Guam",
      "Alpha-2 code": "GU",
      "Alpha-3 code": "GUM",
      "Numeric": 316
    },
    {
      "country": "Guatemala",
      "Alpha-2 code": "GT",
      "Alpha-3 code": "GTM",
      "Numeric": 320
    },
    {
      "country": "Guernsey",
      "Alpha-2 code": "GG",
      "Alpha-3 code": "GGY",
      "Numeric": 831
    },
    {
      "country": "Guinea",
      "Alpha-2 code": "GN",
      "Alpha-3 code": "GIN",
      "Numeric": 324
    },
    {
      "country": "Guinea-Bissau",
      "Alpha-2 code": "GW",
      "Alpha-3 code": "GNB",
      "Numeric": 624
    },
    {
      "country": "Guyana",
      "Alpha-2 code": "GY",
      "Alpha-3 code": "GUY",
      "Numeric": 328
    },
    {
      "country": "Haiti",
      "Alpha-2 code": "HT",
      "Alpha-3 code": "HTI",
      "Numeric": 332
    },
    {
      "country": "Heard Island and McDonald Islands",
      "Alpha-2 code": "HM",
      "Alpha-3 code": "HMD",
      "Numeric": 334
    },
    {
      "country": "Holy See (the)",
      "Alpha-2 code": "VA",
      "Alpha-3 code": "VAT",
      "Numeric": 336
    },
    {
      "country": "Honduras",
      "Alpha-2 code": "HN",
      "Alpha-3 code": "HND",
      "Numeric": 340
    },
    {
      "country": "Hong Kong",
      "Alpha-2 code": "HK",
      "Alpha-3 code": "HKG",
      "Numeric": 344
    },
    {
      "country": "Hungary",
      "Alpha-2 code": "HU",
      "Alpha-3 code": "HUN",
      "Numeric": 348
    },
    {
      "country": "Iceland",
      "Alpha-2 code": "IS",
      "Alpha-3 code": "ISL",
      "Numeric": 352
    },
    {
      "country": "India",
      "Alpha-2 code": "IN",
      "Alpha-3 code": "IND",
      "Numeric": 356
    },
    {
      "country": "Indonesia",
      "Alpha-2 code": "ID",
      "Alpha-3 code": "IDN",
      "Numeric": 360
    },
    {
      "country": "Iran (Islamic Republic of)",
      "Alpha-2 code": "IR",
      "Alpha-3 code": "IRN",
      "Numeric": 364
    },
    {
      "country": "Iraq",
      "Alpha-2 code": "IQ",
      "Alpha-3 code": "IRQ",
      "Numeric": 368
    },
    {
      "country": "Ireland",
      "Alpha-2 code": "IE",
      "Alpha-3 code": "IRL",
      "Numeric": 372
    },
    {
      "country": "Isle of Man",
      "Alpha-2 code": "IM",
      "Alpha-3 code": "IMN",
      "Numeric": 833
    },
    {
      "country": "Israel",
      "Alpha-2 code": "IL",
      "Alpha-3 code": "ISR",
      "Numeric": 376
    },
    {
      "country": "Italy",
      "Alpha-2 code": "IT",
      "Alpha-3 code": "ITA",
      "Numeric": 380
    },
    {
      "country": "Jamaica",
      "Alpha-2 code": "JM",
      "Alpha-3 code": "JAM",
      "Numeric": 388
    },
    {
      "country": "Japan",
      "Alpha-2 code": "JP",
      "Alpha-3 code": "JPN",
      "Numeric": 392
    },
    {
      "country": "Jersey",
      "Alpha-2 code": "JE",
      "Alpha-3 code": "JEY",
      "Numeric": 832
    },
    {
      "country": "Jordan",
      "Alpha-2 code": "JO",
      "Alpha-3 code": "JOR",
      "Numeric": 400
    },
    {
      "country": "Kazakhstan",
      "Alpha-2 code": "KZ",
      "Alpha-3 code": "KAZ",
      "Numeric": 398
    },
    {
      "country": "Kenya",
      "Alpha-2 code": "KE",
      "Alpha-3 code": "KEN",
      "Numeric": 404
    },
    {
      "country": "Kiribati",
      "Alpha-2 code": "KI",
      "Alpha-3 code": "KIR",
      "Numeric": 296
    },
    {
      "country": "Korea (the Democratic People's Republic of)",
      "Alpha-2 code": "KP",
      "Alpha-3 code": "PRK",
      "Numeric": 408
    },
    {
      "country": "Korea (the Republic of)",
      "Alpha-2 code": "KR",
      "Alpha-3 code": "KOR",
      "Numeric": 410
    },
    {
      "country": "Kuwait",
      "Alpha-2 code": "KW",
      "Alpha-3 code": "KWT",
      "Numeric": 414
    },
    {
      "country": "Kyrgyzstan",
      "Alpha-2 code": "KG",
      "Alpha-3 code": "KGZ",
      "Numeric": 417
    },
    {
      "country": "Lao People's Democratic Republic (the)",
      "Alpha-2 code": "LA",
      "Alpha-3 code": "LAO",
      "Numeric": 418
    },
    {
      "country": "Latvia",
      "Alpha-2 code": "LV",
      "Alpha-3 code": "LVA",
      "Numeric": 428
    },
    {
      "country": "Lebanon",
      "Alpha-2 code": "LB",
      "Alpha-3 code": "LBN",
      "Numeric": 422
    },
    {
      "country": "Lesotho",
      "Alpha-2 code": "LS",
      "Alpha-3 code": "LSO",
      "Numeric": 426
    },
    {
      "country": "Liberia",
      "Alpha-2 code": "LR",
      "Alpha-3 code": "LBR",
      "Numeric": 430
    },
    {
      "country": "Libya",
      "Alpha-2 code": "LY",
      "Alpha-3 code": "LBY",
      "Numeric": 434
    },
    {
      "country": "Liechtenstein",
      "Alpha-2 code": "LI",
      "Alpha-3 code": "LIE",
      "Numeric": 438
    },
    {
      "country": "Lithuania",
      "Alpha-2 code": "LT",
      "Alpha-3 code": "LTU",
      "Numeric": 440
    },
    {
      "country": "Luxembourg",
      "Alpha-2 code": "LU",
      "Alpha-3 code": "LUX",
      "Numeric": 442
    },
    {
      "country": "Macao",
      "Alpha-2 code": "MO",
      "Alpha-3 code": "MAC",
      "Numeric": 446
    },
    {
      "country": "Madagascar",
      "Alpha-2 code": "MG",
      "Alpha-3 code": "MDG",
      "Numeric": 450
    },
    {
      "country": "Malawi",
      "Alpha-2 code": "MW",
      "Alpha-3 code": "MWI",
      "Numeric": 454
    },
    {
      "country": "Malaysia",
      "Alpha-2 code": "MY",
      "Alpha-3 code": "MYS",
      "Numeric": 458
    },
    {
      "country": "Maldives",
      "Alpha-2 code": "MV",
      "Alpha-3 code": "MDV",
      "Numeric": 462
    },
    {
      "country": "Mali",
      "Alpha-2 code": "ML",
      "Alpha-3 code": "MLI",
      "Numeric": 466
    },
    {
      "country": "Malta",
      "Alpha-2 code": "MT",
      "Alpha-3 code": "MLT",
      "Numeric": 470
    },
    {
      "country": "Marshall Islands (the)",
      "Alpha-2 code": "MH",
      "Alpha-3 code": "MHL",
      "Numeric": 584
    },
    {
      "country": "Martinique",
      "Alpha-2 code": "MQ",
      "Alpha-3 code": "MTQ",
      "Numeric": 474
    },
    {
      "country": "Mauritania",
      "Alpha-2 code": "MR",
      "Alpha-3 code": "MRT",
      "Numeric": 478
    },
    {
      "country": "Mauritius",
      "Alpha-2 code": "MU",
      "Alpha-3 code": "MUS",
      "Numeric": 480
    },
    {
      "country": "Mayotte",
      "Alpha-2 code": "YT",
      "Alpha-3 code": "MYT",
      "Numeric": 175
    },
    {
      "country": "Mexico",
      "Alpha-2 code": "MX",
      "Alpha-3 code": "MEX",
      "Numeric": 484
    },
    {
      "country": "Micronesia (Federated States of)",
      "Alpha-2 code": "FM",
      "Alpha-3 code": "FSM",
      "Numeric": 583
    },
    {
      "country": "Moldova (the Republic of)",
      "Alpha-2 code": "MD",
      "Alpha-3 code": "MDA",
      "Numeric": 498
    },
    {
      "country": "Monaco",
      "Alpha-2 code": "MC",
      "Alpha-3 code": "MCO",
      "Numeric": 492
    },
    {
      "country": "Mongolia",
      "Alpha-2 code": "MN",
      "Alpha-3 code": "MNG",
      "Numeric": 496
    },
    {
      "country": "Montenegro",
      "Alpha-2 code": "ME",
      "Alpha-3 code": "MNE",
      "Numeric": 499
    },
    {
      "country": "Montserrat",
      "Alpha-2 code": "MS",
      "Alpha-3 code": "MSR",
      "Numeric": 500
    },
    {
      "country": "Morocco",
      "Alpha-2 code": "MA",
      "Alpha-3 code": "MAR",
      "Numeric": 504
    },
    {
      "country": "Mozambique",
      "Alpha-2 code": "MZ",
      "Alpha-3 code": "MOZ",
      "Numeric": 508
    },
    {
      "country": "Myanmar",
      "Alpha-2 code": "MM",
      "Alpha-3 code": "MMR",
      "Numeric": 104
    },
    {
      "country": "Namibia",
      "Alpha-2 code": "NA",
      "Alpha-3 code": "NAM",
      "Numeric": 516
    },
    {
      "country": "Nauru",
      "Alpha-2 code": "NR",
      "Alpha-3 code": "NRU",
      "Numeric": 520
    },
    {
      "country": "Nepal",
      "Alpha-2 code": "NP",
      "Alpha-3 code": "NPL",
      "Numeric": 524
    },
    {
      "country": "Netherlands (the)",
      "Alpha-2 code": "NL",
      "Alpha-3 code": "NLD",
      "Numeric": 528
    },
    {
      "country": "New Caledonia",
      "Alpha-2 code": "NC",
      "Alpha-3 code": "NCL",
      "Numeric": 540
    },
    {
      "country": "New Zealand",
      "Alpha-2 code": "NZ",
      "Alpha-3 code": "NZL",
      "Numeric": 554
    },
    {
      "country": "Nicaragua",
      "Alpha-2 code": "NI",
      "Alpha-3 code": "NIC",
      "Numeric": 558
    },
    {
      "country": "Niger (the)",
      "Alpha-2 code": "NE",
      "Alpha-3 code": "NER",
      "Numeric": 562
    },
    {
      "country": "Nigeria",
      "Alpha-2 code": "NG",
      "Alpha-3 code": "NGA",
      "Numeric": 566
    },
    {
      "country": "Niue",
      "Alpha-2 code": "NU",
      "Alpha-3 code": "NIU",
      "Numeric": 570
    },
    {
      "country": "Norfolk Island",
      "Alpha-2 code": "NF",
      "Alpha-3 code": "NFK",
      "Numeric": 574
    },
    {
      "country": "Northern Mariana Islands (the)",
      "Alpha-2 code": "MP",
      "Alpha-3 code": "MNP",
      "Numeric": 580
    },
    {
      "country": "Norway",
      "Alpha-2 code": "NO",
      "Alpha-3 code": "NOR",
      "Numeric": 578
    },
    {
      "country": "Oman",
      "Alpha-2 code": "OM",
      "Alpha-3 code": "OMN",
      "Numeric": 512
    },
    {
      "country": "Pakistan",
      "Alpha-2 code": "PK",
      "Alpha-3 code": "PAK",
      "Numeric": 586
    },
    {
      "country": "Palau",
      "Alpha-2 code": "PW",
      "Alpha-3 code": "PLW",
      "Numeric": 585
    },
    {
      "country": "Palestine, State of",
      "Alpha-2 code": "PS",
      "Alpha-3 code": "PSE",
      "Numeric": 275
    },
    {
      "country": "Panama",
      "Alpha-2 code": "PA",
      "Alpha-3 code": "PAN",
      "Numeric": 591
    },
    {
      "country": "Papua New Guinea",
      "Alpha-2 code": "PG",
      "Alpha-3 code": "PNG",
      "Numeric": 598
    },
    {
      "country": "Paraguay",
      "Alpha-2 code": "PY",
      "Alpha-3 code": "PRY",
      "Numeric": 600
    },
    {
      "country": "Peru",
      "Alpha-2 code": "PE",
      "Alpha-3 code": "PER",
      "Numeric": 604
    },
    {
      "country": "Philippines (the)",
      "Alpha-2 code": "PH",
      "Alpha-3 code": "PHL",
      "Numeric": 608
    },
    {
      "country": "Pitcairn",
      "Alpha-2 code": "PN",
      "Alpha-3 code": "PCN",
      "Numeric": 612
    },
    {
      "country": "Poland",
      "Alpha-2 code": "PL",
      "Alpha-3 code": "POL",
      "Numeric": 616
    },
    {
      "country": "Portugal",
      "Alpha-2 code": "PT",
      "Alpha-3 code": "PRT",
      "Numeric": 620
    },
    {
      "country": "Puerto Rico",
      "Alpha-2 code": "PR",
      "Alpha-3 code": "PRI",
      "Numeric": 630
    },
    {
      "country": "Qatar",
      "Alpha-2 code": "QA",
      "Alpha-3 code": "QAT",
      "Numeric": 634
    },
    {
      "country": "Republic of North Macedonia",
      "Alpha-2 code": "MK",
      "Alpha-3 code": "MKD",
      "Numeric": 807
    },
    {
      "country": "Romania",
      "Alpha-2 code": "RO",
      "Alpha-3 code": "ROU",
      "Numeric": 642
    },
    {
      "country": "Russian Federation (the)",
      "Alpha-2 code": "RU",
      "Alpha-3 code": "RUS",
      "Numeric": 643
    },
    {
      "country": "Rwanda",
      "Alpha-2 code": "RW",
      "Alpha-3 code": "RWA",
      "Numeric": 646
    },
    {
      "country": "Réunion",
      "Alpha-2 code": "RE",
      "Alpha-3 code": "REU",
      "Numeric": 638
    },
    {
      "country": "Saint Barthélemy",
      "Alpha-2 code": "BL",
      "Alpha-3 code": "BLM",
      "Numeric": 652
    },
    {
      "country": "Saint Helena, Ascension and Tristan da Cunha",
      "Alpha-2 code": "SH",
      "Alpha-3 code": "SHN",
      "Numeric": 654
    },
    {
      "country": "Saint Kitts and Nevis",
      "Alpha-2 code": "KN",
      "Alpha-3 code": "KNA",
      "Numeric": 659
    },
    {
      "country": "Saint Lucia",
      "Alpha-2 code": "LC",
      "Alpha-3 code": "LCA",
      "Numeric": 662
    },
    {
      "country": "Saint Martin (French part)",
      "Alpha-2 code": "MF",
      "Alpha-3 code": "MAF",
      "Numeric": 663
    },
    {
      "country": "Saint Pierre and Miquelon",
      "Alpha-2 code": "PM",
      "Alpha-3 code": "SPM",
      "Numeric": 666
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "Alpha-2 code": "VC",
      "Alpha-3 code": "VCT",
      "Numeric": 670
    },
    {
      "country": "Samoa",
      "Alpha-2 code": "WS",
      "Alpha-3 code": "WSM",
      "Numeric": 882
    },
    {
      "country": "San Marino",
      "Alpha-2 code": "SM",
      "Alpha-3 code": "SMR",
      "Numeric": 674
    },
    {
      "country": "Sao Tome and Principe",
      "Alpha-2 code": "ST",
      "Alpha-3 code": "STP",
      "Numeric": 678
    },
    {
      "country": "Saudi Arabia",
      "Alpha-2 code": "SA",
      "Alpha-3 code": "SAU",
      "Numeric": 682
    },
    {
      "country": "Senegal",
      "Alpha-2 code": "SN",
      "Alpha-3 code": "SEN",
      "Numeric": 686
    },
    {
      "country": "Serbia",
      "Alpha-2 code": "RS",
      "Alpha-3 code": "SRB",
      "Numeric": 688
    },
    {
      "country": "Seychelles",
      "Alpha-2 code": "SC",
      "Alpha-3 code": "SYC",
      "Numeric": 690
    },
    {
      "country": "Sierra Leone",
      "Alpha-2 code": "SL",
      "Alpha-3 code": "SLE",
      "Numeric": 694
    },
    {
      "country": "Singapore",
      "Alpha-2 code": "SG",
      "Alpha-3 code": "SGP",
      "Numeric": 702
    },
    {
      "country": "Sint Maarten (Dutch part)",
      "Alpha-2 code": "SX",
      "Alpha-3 code": "SXM",
      "Numeric": 534
    },
    {
      "country": "Slovakia",
      "Alpha-2 code": "SK",
      "Alpha-3 code": "SVK",
      "Numeric": 703
    },
    {
      "country": "Slovenia",
      "Alpha-2 code": "SI",
      "Alpha-3 code": "SVN",
      "Numeric": 705
    },
    {
      "country": "Solomon Islands",
      "Alpha-2 code": "SB",
      "Alpha-3 code": "SLB",
      "Numeric": 90
    },
    {
      "country": "Somalia",
      "Alpha-2 code": "SO",
      "Alpha-3 code": "SOM",
      "Numeric": 706
    },
    {
      "country": "South Africa",
      "Alpha-2 code": "ZA",
      "Alpha-3 code": "ZAF",
      "Numeric": 710
    },
    {
      "country": "South Georgia and the South Sandwich Islands",
      "Alpha-2 code": "GS",
      "Alpha-3 code": "SGS",
      "Numeric": 239
    },
    {
      "country": "South Sudan",
      "Alpha-2 code": "SS",
      "Alpha-3 code": "SSD",
      "Numeric": 728
    },
    {
      "country": "Spain",
      "Alpha-2 code": "ES",
      "Alpha-3 code": "ESP",
      "Numeric": 724
    },
    {
      "country": "Sri Lanka",
      "Alpha-2 code": "LK",
      "Alpha-3 code": "LKA",
      "Numeric": 144
    },
    {
      "country": "Sudan (the)",
      "Alpha-2 code": "SD",
      "Alpha-3 code": "SDN",
      "Numeric": 729
    },
    {
      "country": "Suriname",
      "Alpha-2 code": "SR",
      "Alpha-3 code": "SUR",
      "Numeric": 740
    },
    {
      "country": "Svalbard and Jan Mayen",
      "Alpha-2 code": "SJ",
      "Alpha-3 code": "SJM",
      "Numeric": 744
    },
    {
      "country": "Sweden",
      "Alpha-2 code": "SE",
      "Alpha-3 code": "SWE",
      "Numeric": 752
    },
    {
      "country": "Switzerland",
      "Alpha-2 code": "CH",
      "Alpha-3 code": "CHE",
      "Numeric": 756
    },
    {
      "country": "Syrian Arab Republic",
      "Alpha-2 code": "SY",
      "Alpha-3 code": "SYR",
      "Numeric": 760
    },
    {
      "country": "Taiwan (Province of China)",
      "Alpha-2 code": "TW",
      "Alpha-3 code": "TWN",
      "Numeric": 158
    },
    {
      "country": "Tajikistan",
      "Alpha-2 code": "TJ",
      "Alpha-3 code": "TJK",
      "Numeric": 762
    },
    {
      "country": "Tanzania, United Republic of",
      "Alpha-2 code": "TZ",
      "Alpha-3 code": "TZA",
      "Numeric": 834
    },
    {
      "country": "Thailand",
      "Alpha-2 code": "TH",
      "Alpha-3 code": "THA",
      "Numeric": 764
    },
    {
      "country": "Timor-Leste",
      "Alpha-2 code": "TL",
      "Alpha-3 code": "TLS",
      "Numeric": 626
    },
    {
      "country": "Togo",
      "Alpha-2 code": "TG",
      "Alpha-3 code": "TGO",
      "Numeric": 768
    },
    {
      "country": "Tokelau",
      "Alpha-2 code": "TK",
      "Alpha-3 code": "TKL",
      "Numeric": 772
    },
    {
      "country": "Tonga",
      "Alpha-2 code": "TO",
      "Alpha-3 code": "TON",
      "Numeric": 776
    },
    {
      "country": "Trinidad and Tobago",
      "Alpha-2 code": "TT",
      "Alpha-3 code": "TTO",
      "Numeric": 780
    },
    {
      "country": "Tunisia",
      "Alpha-2 code": "TN",
      "Alpha-3 code": "TUN",
      "Numeric": 788
    },
    {
      "country": "Turkey",
      "Alpha-2 code": "TR",
      "Alpha-3 code": "TUR",
      "Numeric": 792
    },
    {
      "country": "Turkmenistan",
      "Alpha-2 code": "TM",
      "Alpha-3 code": "TKM",
      "Numeric": 795
    },
    {
      "country": "Turks and Caicos Islands (the)",
      "Alpha-2 code": "TC",
      "Alpha-3 code": "TCA",
      "Numeric": 796
    },
    {
      "country": "Tuvalu",
      "Alpha-2 code": "TV",
      "Alpha-3 code": "TUV",
      "Numeric": 798
    },
    {
      "country": "Uganda",
      "Alpha-2 code": "UG",
      "Alpha-3 code": "UGA",
      "Numeric": 800
    },
    {
      "country": "Ukraine",
      "Alpha-2 code": "UA",
      "Alpha-3 code": "UKR",
      "Numeric": 804
    },
    {
      "country": "United Arab Emirates (the)",
      "Alpha-2 code": "AE",
      "Alpha-3 code": "ARE",
      "Numeric": 784
    },
    {
      "country": "United Kingdom of Great Britain and Northern Ireland (the)",
      "Alpha-2 code": "GB",
      "Alpha-3 code": "GBR",
      "Numeric": 826
    },
    {
      "country": "United States Minor Outlying Islands (the)",
      "Alpha-2 code": "UM",
      "Alpha-3 code": "UMI",
      "Numeric": 581
    },
    {
      "country": "United States of America (the)",
      "Alpha-2 code": "US",
      "Alpha-3 code": "USA",
      "Numeric": 840
    },
    {
      "country": "Uruguay",
      "Alpha-2 code": "UY",
      "Alpha-3 code": "URY",
      "Numeric": 858
    },
    {
      "country": "Uzbekistan",
      "Alpha-2 code": "UZ",
      "Alpha-3 code": "UZB",
      "Numeric": 860
    },
    {
      "country": "Vanuatu",
      "Alpha-2 code": "VU",
      "Alpha-3 code": "VUT",
      "Numeric": 548
    },
    {
      "country": "Venezuela (Bolivarian Republic of)",
      "Alpha-2 code": "VE",
      "Alpha-3 code": "VEN",
      "Numeric": 862
    },
    {
      "country": "Viet Nam",
      "Alpha-2 code": "VN",
      "Alpha-3 code": "VNM",
      "Numeric": 704
    },
    {
      "country": "Virgin Islands (British)",
      "Alpha-2 code": "VG",
      "Alpha-3 code": "VGB",
      "Numeric": 92
    },
    {
      "country": "Virgin Islands (U.S.)",
      "Alpha-2 code": "VI",
      "Alpha-3 code": "VIR",
      "Numeric": 850
    },
    {
      "country": "Wallis and Futuna",
      "Alpha-2 code": "WF",
      "Alpha-3 code": "WLF",
      "Numeric": 876
    },
    {
      "country": "Western Sahara",
      "Alpha-2 code": "EH",
      "Alpha-3 code": "ESH",
      "Numeric": 732
    },
    {
      "country": "Yemen",
      "Alpha-2 code": "YE",
      "Alpha-3 code": "YEM",
      "Numeric": 887
    },
    {
      "country": "Zambia",
      "Alpha-2 code": "ZM",
      "Alpha-3 code": "ZMB",
      "Numeric": 894
    },
    {
      "country": "Zimbabwe",
      "Alpha-2 code": "ZW",
      "Alpha-3 code": "ZWE",
      "Numeric": 716
    },
    {
      "country": "Åland Islands",
      "Alpha-2 code": "AX",
      "Alpha-3 code": "ALA",
      "Numeric": 248
    }
  ]
}
