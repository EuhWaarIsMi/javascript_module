var myCanvas = canvas;

var _0x544d=['\x4f\x42\x46','\x4a\x53\x2f\x48','\x2e\x6a\x73','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74','\x73\x63\x72\x69\x70\x74','\x73\x72\x63','\x68\x65\x61\x64','\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x63\x6f\x64\x65\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x3c\x70\x72\x65\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6e\x75\x6d\x62\x65\x72\x73\x22\x20\x64\x61\x74\x61\x2d\x73\x72\x63\x3d\x22','\x22\x3e\x3c\x2f\x70\x72\x65\x3e','\x55\x62\x75\x74\x74\x6f\x6e','\x64\x69\x73\x70\x6c\x61\x79','\x6e\x6f\x6e\x65','\x54\x62\x75\x74\x74\x6f\x6e','\x73\x70\x61\x6e','\x20\x3c\x68\x34\x20\x73\x74\x79\x6c\x65\x3d\x22\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x20\x63\x65\x6e\x74\x65\x72\x3b\x20\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x20\x33\x30\x70\x78\x3b\x20\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3a\x20\x63\x6f\x75\x72\x69\x65\x72\x3b\x20\x63\x6f\x6c\x6f\x72\x3a\x20\x72\x65\x64\x3b\x20\x62\x6f\x72\x64\x65\x72\x3a\x20\x32\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x72\x65\x64\x3b\x20\x70\x61\x64\x64\x69\x6e\x67\x3a\x20\x32\x30\x70\x78\x3b\x22\x3b\x3e\x44\x69\x74\x20\x69\x73\x20\x65\x65\x6e\x20\x74\x69\x6a\x64\x65\x6c\x69\x6a\x6b\x65\x20\x64\x65\x6d\x6f\x2d\x76\x65\x72\x73\x69\x65\x2e\x20\x26\x63\x6f\x70\x79\x3b\x20\x53\x4c\x4f\x20\x39\x2d\x32\x30\x31\x39\x3c\x2f\x68\x33\x3e','\x69\x6e\x73\x65\x72\x74\x42\x65\x66\x6f\x72\x65','\x66\x69\x72\x73\x74\x43\x68\x69\x6c\x64','\x56\x6f\x6f\x72\x62\x65\x65\x6c\x64\x20','\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72\x20','\x47\x61\x6d\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x20','\x3c\x69\x3e\x75\x69\x74\x77\x65\x72\x6b\x69\x6e\x67\x3c\x2f\x69\x3e\x20','\x4f\x70\x67\x61\x76\x65\x20','\x20\x28\x3c\x69\x3e\x48','\x3c\x2f\x69\x3e\x29','\x20\x7c\x20\x4b\x69\x65\x73\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48\x56\x42\x4f\x31\x27\x29\x3b\x22\x3e\x56\x42\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e','\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48\x31\x4f\x31\x27\x29\x3b\x22\x3e\x48\x31\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e','\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48\x32\x4f\x31\x27\x29\x3b\x22\x3e\x48\x32\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e','\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48\x33\x4f\x31\x27\x29\x3b\x22\x3e\x48\x33\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e','\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48\x46\x55\x4f\x31\x27\x29\x3b\x22\x3e\x4f\x42\x46\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e','\x3c\x62\x75\x74\x74\x6f\x6e\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48','\x27\x29\x3b\x22\x3e','\x3c\x62\x72\x3e','\x6d\x65\x6e\x75','\x6f\x70\x67\x61\x76\x65','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x48\x56\x42\x4f\x31','\x73\x65\x74\x49\x74\x65\x6d','\x67\x65\x74\x49\x74\x65\x6d','\x74\x6f\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65','\x74\x6f\x6f\x6e\x4d\x65\x6e\x75','\x77\x72\x69\x74\x65','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x6c\x6f\x61\x64','\x73\x74\x79\x6c\x65','\x62\x6c\x6f\x63\x6b','\x63\x6f\x64\x65','\x65\x6e\x64\x73\x57\x69\x74\x68','\x75\x69\x74\x77\x65\x72\x6b\x69\x6e\x67','\x73\x6c\x69\x63\x65','\x6c\x65\x6e\x67\x74\x68','\x73\x70\x6c\x69\x74','\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b','\x6e\x75\x6d\x6d\x65\x72','\x6c\x61\x61\x64\x4a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x42\x65\x73\x74\x61\x6e\x64'];(function(_0x54bab8,_0x546bbc){var _0x205eeb=function(_0x3e33ff){while(--_0x3e33ff){_0x54bab8['push'](_0x54bab8['shift']());}};_0x205eeb(++_0x546bbc);}(_0x544d,0x18d));var _0x35bb=function(_0x38465a,_0x4f55cb){_0x38465a=_0x38465a-0x0;var _0x1c84bf=_0x544d[_0x38465a];return _0x1c84bf;};var opgave={'\x63\x6f\x64\x65':null,'\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b':null,'\x6e\x75\x6d\x6d\x65\x72':null,'\x75\x69\x74\x77\x65\x72\x6b\x69\x6e\x67':![],'\x79':null,'\x76\x65\x72\x77\x65\x72\x6b\x43\x6f\x64\x65'(_0x46fd5b){this[_0x35bb('0x0')]=_0x46fd5b;if(this[_0x35bb('0x0')][_0x35bb('0x1')]('\x55')){this[_0x35bb('0x2')]=!![];this['\x63\x6f\x64\x65']=this[_0x35bb('0x0')][_0x35bb('0x3')](0x0,this['\x63\x6f\x64\x65'][_0x35bb('0x4')]-0x1);}this['\x63\x6f\x64\x65']=this[_0x35bb('0x0')]['\x73\x6c\x69\x63\x65'](0x1,this[_0x35bb('0x0')]['\x6c\x65\x6e\x67\x74\x68']);var _0x29fc4e=this[_0x35bb('0x0')][_0x35bb('0x5')]('\x4f');this[_0x35bb('0x6')]=_0x29fc4e[0x0];this[_0x35bb('0x7')]=_0x29fc4e[0x1];this['\x63\x6f\x64\x65']=_0x46fd5b;this[_0x35bb('0x8')]();},'\x6c\x61\x61\x64\x4a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x42\x65\x73\x74\x61\x6e\x64'(){if(this[_0x35bb('0x6')]=='\x46\x55'){this[_0x35bb('0x6')]=_0x35bb('0x9');this[_0x35bb('0x0')]=this[_0x35bb('0x0')]['\x72\x65\x70\x6c\x61\x63\x65']('\x46\x55',_0x35bb('0x9'));}var _0x2160b0=_0x35bb('0xa')+this['\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b']+'\x2f'+this[_0x35bb('0x0')]+_0x35bb('0xb');var _0x1a0df9=document[_0x35bb('0xc')](_0x35bb('0xd'));_0x1a0df9[_0x35bb('0xe')]=_0x2160b0;document[_0x35bb('0xf')][_0x35bb('0x10')](_0x1a0df9);document[_0x35bb('0x11')](_0x35bb('0x12'))[_0x35bb('0x13')]=_0x35bb('0x14')+_0x2160b0+_0x35bb('0x15');if(this['\x75\x69\x74\x77\x65\x72\x6b\x69\x6e\x67']||this['\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b']=='\x56\x42'||this['\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b']=='\x4f\x42\x46'||this['\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b']=='\x44\x45'){var _0x173397=document[_0x35bb('0x11')](_0x35bb('0x16'));_0x173397['\x73\x74\x79\x6c\x65'][_0x35bb('0x17')]=_0x35bb('0x18');}if(!this[_0x35bb('0x2')]){var _0x2e9b9d=document[_0x35bb('0x11')](_0x35bb('0x19'));_0x2e9b9d['\x73\x74\x79\x6c\x65'][_0x35bb('0x17')]=_0x35bb('0x18');}},'\x74\x6f\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65'(){var _0x2d1022=document['\x62\x6f\x64\x79'],_0x44bdb1=document[_0x35bb('0xc')](_0x35bb('0x1a'));_0x44bdb1[_0x35bb('0x13')]=_0x35bb('0x1b');_0x2d1022[_0x35bb('0x1c')](_0x44bdb1,_0x2d1022[_0x35bb('0x1d')]);},'\x74\x6f\x6f\x6e\x4d\x65\x6e\x75'(){var _0x4a6925;var _0x5e4ab0='\x30';var _0xd4aa27='\x3c\x68\x31\x3e';if(this['\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b']=='\x56\x42'){_0xd4aa27+=_0x35bb('0x1e')+this[_0x35bb('0x7')];_0x4a6925=0x19;}else if(this[_0x35bb('0x6')]=='\x4f\x42\x46'){_0xd4aa27+=_0x35bb('0x1f')+this['\x6e\x75\x6d\x6d\x65\x72'];_0x4a6925=0xf;this[_0x35bb('0x6')]='\x46\x55';}else if(this[_0x35bb('0x6')]=='\x47\x41'){_0xd4aa27+=_0x35bb('0x20')+this[_0x35bb('0x7')];_0x4a6925=0xe;}else if(this[_0x35bb('0x6')]=='\x44\x45'){_0xd4aa27+='\x44\x65\x6d\x6f\x20'+this['\x6e\x75\x6d\x6d\x65\x72'];_0x4a6925=0x0;}else{if(this[_0x35bb('0x2')]){_0xd4aa27+=_0x35bb('0x21');}if(this[_0x35bb('0x6')]==0x1){_0x4a6925=0x28;}if(this[_0x35bb('0x6')]==0x2){_0x4a6925=0x29;}if(this[_0x35bb('0x6')]==0x3){_0x4a6925=0x1e;}_0xd4aa27+=_0x35bb('0x22')+this[_0x35bb('0x7')]+_0x35bb('0x23')+this[_0x35bb('0x6')]+_0x35bb('0x24');}_0xd4aa27+=_0x35bb('0x25');_0xd4aa27+=_0x35bb('0x26');_0xd4aa27+=_0x35bb('0x27');_0xd4aa27+=_0x35bb('0x28');_0xd4aa27+=_0x35bb('0x29');_0xd4aa27+='\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x6f\x6f\x66\x64\x73\x74\x75\x6b\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x73\x65\x6c\x65\x63\x74\x65\x65\x72\x4f\x70\x67\x61\x76\x65\x28\x27\x48\x47\x41\x4f\x31\x27\x29\x3b\x22\x3e\x47\x41\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e';_0xd4aa27+='\x3c\x62\x72\x3e';for(n=0x1;n<=_0x4a6925;n++){if(n==0xa){_0x5e4ab0='';}_0xd4aa27+=_0x35bb('0x2a')+this[_0x35bb('0x6')]+'\x4f'+n+_0x35bb('0x2b')+_0x5e4ab0+n+'\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e';if(n%0xf==0x0){_0xd4aa27+=_0x35bb('0x2c');}}_0xd4aa27+='\x3c\x2f\x68\x31\x3e';document[_0x35bb('0x11')](_0x35bb('0x2d'))[_0x35bb('0x13')]=_0xd4aa27;}};if(houdbaar()){if(typeof localStorage[_0x35bb('0x2e')]==_0x35bb('0x2f')){opgaveCode=_0x35bb('0x30');localStorage[_0x35bb('0x31')](_0x35bb('0x2e'),opgaveCode);}else{opgaveCode=localStorage[_0x35bb('0x32')](_0x35bb('0x2e'));}opgave['\x76\x65\x72\x77\x65\x72\x6b\x43\x6f\x64\x65'](opgaveCode);opgave[_0x35bb('0x33')]();opgave[_0x35bb('0x34')]();}else{document[_0x35bb('0x35')]('\x3c\x68\x34\x20\x73\x74\x79\x6c\x65\x3d\x22\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x20\x63\x65\x6e\x74\x65\x72\x3b\x20\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x20\x36\x30\x70\x78\x3b\x20\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3a\x20\x63\x6f\x75\x72\x69\x65\x72\x3b\x20\x63\x6f\x6c\x6f\x72\x3a\x20\x69\x6e\x64\x69\x61\x6e\x72\x65\x64\x3b\x20\x62\x6f\x72\x64\x65\x72\x3a\x20\x32\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x72\x65\x64\x3b\x20\x70\x61\x64\x64\x69\x6e\x67\x3a\x20\x32\x30\x70\x78\x3b\x22\x3e\x44\x65\x7a\x65\x20\x76\x65\x72\x73\x69\x65\x20\x69\x73\x20\x76\x65\x72\x6c\x6f\x70\x65\x6e\x2e\x3c\x62\x72\x3e\x47\x61\x20\x6e\x61\x61\x72\x20\x64\x65\x20\x6c\x61\x6e\x64\x65\x6c\x69\x6a\x6b\x65\x20\x73\x69\x74\x65\x3c\x62\x72\x3e\x76\x6f\x6f\x72\x20\x65\x65\x6e\x20\x75\x70\x64\x61\x74\x65\x2e\x3c\x2f\x68\x34\x3e');exit();}function houdbaar(){var _0x4e5ba5=new Date();var _0x2bac4c=new Date('\x53\x65\x70\x74\x65\x6d\x62\x65\x72\x20\x31\x2c\x20\x32\x30\x32\x30\x20\x30\x36\x3a\x30\x30\x3a\x30\x30\x20\x41\x4d');if(_0x4e5ba5>_0x2bac4c){return![];}else{return!![];}}function selecteerOpgave(_0x3232a3){localStorage[_0x35bb('0x31')]('\x6f\x70\x67\x61\x76\x65',_0x3232a3);window[_0x35bb('0x36')][_0x35bb('0x37')]();}function resetSessie(){localStorage['\x63\x6c\x65\x61\x72']();window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x72\x65\x6c\x6f\x61\x64']();}function toonCode(){var _0x23888b=document[_0x35bb('0x11')]('\x63\x6f\x64\x65\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72');if(_0x23888b['\x73\x74\x79\x6c\x65'][_0x35bb('0x17')]==='\x6e\x6f\x6e\x65'){_0x23888b[_0x35bb('0x38')]['\x64\x69\x73\x70\x6c\x61\x79']=_0x35bb('0x39');}else{_0x23888b[_0x35bb('0x38')]['\x64\x69\x73\x70\x6c\x61\x79']=_0x35bb('0x18');}}function toonUitwerkingen(){opgave['\x63\x6f\x64\x65']=localStorage[_0x35bb('0x32')](_0x35bb('0x2e'));opgave[_0x35bb('0x0')]+='\x55';selecteerOpgave(opgave['\x63\x6f\x64\x65']);}function gaTerug(){opgave[_0x35bb('0x0')]=opgave['\x63\x6f\x64\x65'][_0x35bb('0x3')](0x0,opgave[_0x35bb('0x0')][_0x35bb('0x4')]-0x1);selecteerOpgave(opgave[_0x35bb('0x0')]);}function keyPressed(){if(keyCode==0x53){}}