/**
 * Created by MARK-Max on 8.10.2016 г..
 */
function extractLinks (input){
    let text = input.join(' ');
    let pattern =  /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let out = text.match(pattern);
    if(out.length>=1){
        console.log(out.join('\n'))
    }
    else{
        console.log(out);
    }
}
extractLinks(['Need information about cheap hotels in London?',
'You can check us at www.london-hotels.co.uk!',
'We provide the best services in London.',
'Here are some reviews in some blogs:',
'"London Hotels are awesome!" - www.indigo.bloggers.com',
'm very satisfied with their services" - ww.ivan.bg',
't Hotel Services!" - www.rebel21.sedecrem.moc'])