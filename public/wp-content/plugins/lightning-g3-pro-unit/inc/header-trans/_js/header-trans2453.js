;(function(w,d){
    let header_scrool_func = ()=>{ 
        let siteHeader = document.getElementById('site-header');
        if( document.body.classList.contains('header_scrolled') ){
            siteHeader.style.position = null;
        } else {
            siteHeader.style.position = 'absolute';
        }
    }
    w.addEventListener('load', header_scrool_func, true)
    w.addEventListener('scroll', header_scrool_func, true)
    let q=null,f=function(){
        // ヘッダーの高さ
        let headerHeight=d.getElementsByClassName('site-header')[0].offsetHeight;
        let headerHalf = headerHeight/2;
        // ページヘッダ
        let pageHeader = d.getElementsByClassName('page-header')[0];
        if ( undefined !== pageHeader ){
            // もともとの位置だと埋まってしまうのでヘッダーの高さ分下にオフセット
            Array.prototype.forEach.call(d.getElementsByClassName('page-header-inner'),function(v){
                v.style.marginTop = headerHeight + 'px';
                v.style.opacity = 1;
            });
            let pageHeaderHeight = pageHeader.offsetHeight;
            let generatedPageHeaderHeight = pageHeaderHeight + headerHeight;
            // 最初 page-headerに高さ指定がない時のみ高さを取得して ヘッダーの高さを追加した数値を指定する
            // * 高さ指定がある時に追加してしまうと、ヘッダー高さ分無限に高くなる
            // * 厳密に言えばこの方式はスマホの時に適切なサイズではない事になるが、厳密にいきたい人にはヘッダー高さを手入力して貰う
            Array.prototype.forEach.call(d.getElementsByClassName('page-header'),function(v){
                if ( ! v.style.height ){
                    v.style.height = generatedPageHeaderHeight + 'px';
                    v.style.opacity = 1;
                }
            });

            
        }
        Array.prototype.forEach.call(d.getElementsByClassName('ltg-slide-text-set'),function(v){
        // if(w.window.innerWidth<992){v.removeAttribute('style');return}
            v.style.top = 'calc(50% + '+headerHalf+'px)';
            v.style.opacity = 1;
        });
        Array.prototype.forEach.call(d.getElementsByClassName('ltg-slide-button-next'),function(v){
            v.style.top = 'calc(50% + '+headerHalf+'px)';
            v.style.opacity = 1;
        });
        Array.prototype.forEach.call(d.getElementsByClassName('ltg-slide-button-prev'),function(v){
            v.style.top = 'calc(50% + '+headerHalf+'px)';
            v.style.opacity = 1;
        });
    };
    w.addEventListener('load',f,false);
    w.addEventListener('resize',function(){clearTimeout(q);q=setTimeout(f,300);},false);
  })(window,document);