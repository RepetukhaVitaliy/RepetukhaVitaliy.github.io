/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setupMobilePrizesSlider(){
    var prizesNum = 4;
    
    // copy prizes title
    $j('#prizestitle_mob').html($j('.g_prizelist_title').html()).addClass('g_prizelist_title');
    
    
    var currentIndex = 0;
    $j('#prizes_str2_mob').on({'mousedown': function(){ 
            currentIndex ++;
            if(currentIndex > prizesNum-1)currentIndex = 0;
             
            showPrizeByIndex(currentIndex);
    }});

    $j('#prizes_str1_mob').on({'mousedown': function(){ 
            currentIndex --;
            if(currentIndex < 0)currentIndex = prizesNum-1;
             
            showPrizeByIndex(currentIndex);
    }});
    
    showPrizeByIndex(currentIndex);
    function showPrizeByIndex(index){
        
        // fix long text on icon
        if(index == 0)$j('.g_prizelist').find('div').eq( 0 ).find('h5').html('Гарантированный приз за 500 баллов');
        else $j('.g_prizelist').find('div').eq( 0 ).find('h5').html('Гаранти-рованный<br>приз');
        
        // copy description
        $j('#prizestext_mob').html($j('.g_prizelist').find('div').eq( index ).html());
        //$j('#prizestext_mob').find('br').remove();
        $j('#prizestext_mob br').replaceWith(' ');
        
        $j('#prizestext_mob_style').addClass('g_prizelist');
        $j('#prizestext_mob_style').addClass('inline');
        $j('#prizestext_mob_style').find('h5').css({'font-size':'20px'});
        $j('#prizestext_mob_style').find('p').css({'font-size':'20px'});
        
        // set zoom icon
        $j('#prizessicons_mob').find('#zoomicon').find('img').attr('src','assets/ui/main_slider_icon'+(index+1)+'_b.png');
        
        drawIconsRowFromIndex(index);
    }
    
    function drawIconsRowFromIndex(index){
        
        var rotindex = [0,1,2,3,0,1,2,3];
        
        // set icon
        $j('#prizessicons_mob').find('#icon2').find('img').attr('src','assets/ui/main_slider_icon'+(rotindex[index+1]+1)+'_s.png');
        // copy text
        $j('#prizessicons_mob').find('#icon2').find('h5').html($j('.g_prizelist').find('div').eq( rotindex[index+1] ).find('h5').html());
        
        // set icon
        $j('#prizessicons_mob').find('#icon3').find('img').attr('src','assets/ui/main_slider_icon'+(rotindex[index+2]+1)+'_s.png');
        // copy text
        $j('#prizessicons_mob').find('#icon3').find('h5').html($j('.g_prizelist').find('div').eq( rotindex[index+2] ).find('h5').html());
        
        // set icon
        $j('#prizessicons_mob').find('#icon4').find('img').attr('src','assets/ui/main_slider_icon'+(rotindex[index+3]+1)+'_s.png');
        // copy text
        $j('#prizessicons_mob').find('#icon4').find('h5').html($j('.g_prizelist').find('div').eq( rotindex[index+3] ).find('h5').html());
        
        // copy style to h5 same style
        $j('#prizessicons_mob').addClass('g_prizelist');
    }
    
    
}