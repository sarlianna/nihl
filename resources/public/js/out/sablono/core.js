// Compiled by ClojureScript 1.7.228 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__19908__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__19907 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__19907,(0),null);
var body = cljs.core.nthnext.call(null,vec__19907,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__19908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19909__i = 0, G__19909__a = new Array(arguments.length -  0);
while (G__19909__i < G__19909__a.length) {G__19909__a[G__19909__i] = arguments[G__19909__i + 0]; ++G__19909__i;}
  args = new cljs.core.IndexedSeq(G__19909__a,0);
} 
return G__19908__delegate.call(this,args);};
G__19908.cljs$lang$maxFixedArity = 0;
G__19908.cljs$lang$applyTo = (function (arglist__19910){
var args = cljs.core.seq(arglist__19910);
return G__19908__delegate(args);
});
G__19908.cljs$core$IFn$_invoke$arity$variadic = G__19908__delegate;
return G__19908;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19128__auto__ = (function sablono$core$update_arglists_$_iter__19915(s__19916){
return (new cljs.core.LazySeq(null,(function (){
var s__19916__$1 = s__19916;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19916__$1);
if(temp__4657__auto__){
var s__19916__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19916__$2)){
var c__19126__auto__ = cljs.core.chunk_first.call(null,s__19916__$2);
var size__19127__auto__ = cljs.core.count.call(null,c__19126__auto__);
var b__19918 = cljs.core.chunk_buffer.call(null,size__19127__auto__);
if((function (){var i__19917 = (0);
while(true){
if((i__19917 < size__19127__auto__)){
var args = cljs.core._nth.call(null,c__19126__auto__,i__19917);
cljs.core.chunk_append.call(null,b__19918,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__19919 = (i__19917 + (1));
i__19917 = G__19919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19918),sablono$core$update_arglists_$_iter__19915.call(null,cljs.core.chunk_rest.call(null,s__19916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19918),null);
}
} else {
var args = cljs.core.first.call(null,s__19916__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__19915.call(null,cljs.core.rest.call(null,s__19916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19128__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19421__auto__ = [];
var len__19414__auto___19925 = arguments.length;
var i__19415__auto___19926 = (0);
while(true){
if((i__19415__auto___19926 < len__19414__auto___19925)){
args__19421__auto__.push((arguments[i__19415__auto___19926]));

var G__19927 = (i__19415__auto___19926 + (1));
i__19415__auto___19926 = G__19927;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((0) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19422__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19128__auto__ = (function sablono$core$iter__19921(s__19922){
return (new cljs.core.LazySeq(null,(function (){
var s__19922__$1 = s__19922;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19922__$1);
if(temp__4657__auto__){
var s__19922__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19922__$2)){
var c__19126__auto__ = cljs.core.chunk_first.call(null,s__19922__$2);
var size__19127__auto__ = cljs.core.count.call(null,c__19126__auto__);
var b__19924 = cljs.core.chunk_buffer.call(null,size__19127__auto__);
if((function (){var i__19923 = (0);
while(true){
if((i__19923 < size__19127__auto__)){
var style = cljs.core._nth.call(null,c__19126__auto__,i__19923);
cljs.core.chunk_append.call(null,b__19924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__19928 = (i__19923 + (1));
i__19923 = G__19928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19924),sablono$core$iter__19921.call(null,cljs.core.chunk_rest.call(null,s__19922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19924),null);
}
} else {
var style = cljs.core.first.call(null,s__19922__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__19921.call(null,cljs.core.rest.call(null,s__19922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19128__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19920){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19920));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to19929 = (function sablono$core$link_to19929(var_args){
var args__19421__auto__ = [];
var len__19414__auto___19932 = arguments.length;
var i__19415__auto___19933 = (0);
while(true){
if((i__19415__auto___19933 < len__19414__auto___19932)){
args__19421__auto__.push((arguments[i__19415__auto___19933]));

var G__19934 = (i__19415__auto___19933 + (1));
i__19415__auto___19933 = G__19934;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((1) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((1)),(0))):null);
return sablono.core.link_to19929.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19422__auto__);
});

sablono.core.link_to19929.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to19929.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19929.cljs$lang$applyTo = (function (seq19930){
var G__19931 = cljs.core.first.call(null,seq19930);
var seq19930__$1 = cljs.core.next.call(null,seq19930);
return sablono.core.link_to19929.cljs$core$IFn$_invoke$arity$variadic(G__19931,seq19930__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19929);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19935 = (function sablono$core$mail_to19935(var_args){
var args__19421__auto__ = [];
var len__19414__auto___19940 = arguments.length;
var i__19415__auto___19941 = (0);
while(true){
if((i__19415__auto___19941 < len__19414__auto___19940)){
args__19421__auto__.push((arguments[i__19415__auto___19941]));

var G__19942 = (i__19415__auto___19941 + (1));
i__19415__auto___19941 = G__19942;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((1) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19935.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19422__auto__);
});

sablono.core.mail_to19935.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19938){
var vec__19939 = p__19938;
var content = cljs.core.nth.call(null,vec__19939,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18356__auto__ = content;
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19935.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19935.cljs$lang$applyTo = (function (seq19936){
var G__19937 = cljs.core.first.call(null,seq19936);
var seq19936__$1 = cljs.core.next.call(null,seq19936);
return sablono.core.mail_to19935.cljs$core$IFn$_invoke$arity$variadic(G__19937,seq19936__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19935);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19943 = (function sablono$core$unordered_list19943(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19128__auto__ = (function sablono$core$unordered_list19943_$_iter__19948(s__19949){
return (new cljs.core.LazySeq(null,(function (){
var s__19949__$1 = s__19949;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19949__$1);
if(temp__4657__auto__){
var s__19949__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19949__$2)){
var c__19126__auto__ = cljs.core.chunk_first.call(null,s__19949__$2);
var size__19127__auto__ = cljs.core.count.call(null,c__19126__auto__);
var b__19951 = cljs.core.chunk_buffer.call(null,size__19127__auto__);
if((function (){var i__19950 = (0);
while(true){
if((i__19950 < size__19127__auto__)){
var x = cljs.core._nth.call(null,c__19126__auto__,i__19950);
cljs.core.chunk_append.call(null,b__19951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19952 = (i__19950 + (1));
i__19950 = G__19952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19951),sablono$core$unordered_list19943_$_iter__19948.call(null,cljs.core.chunk_rest.call(null,s__19949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19951),null);
}
} else {
var x = cljs.core.first.call(null,s__19949__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list19943_$_iter__19948.call(null,cljs.core.rest.call(null,s__19949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19128__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19943);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19953 = (function sablono$core$ordered_list19953(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19128__auto__ = (function sablono$core$ordered_list19953_$_iter__19958(s__19959){
return (new cljs.core.LazySeq(null,(function (){
var s__19959__$1 = s__19959;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19959__$1);
if(temp__4657__auto__){
var s__19959__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19959__$2)){
var c__19126__auto__ = cljs.core.chunk_first.call(null,s__19959__$2);
var size__19127__auto__ = cljs.core.count.call(null,c__19126__auto__);
var b__19961 = cljs.core.chunk_buffer.call(null,size__19127__auto__);
if((function (){var i__19960 = (0);
while(true){
if((i__19960 < size__19127__auto__)){
var x = cljs.core._nth.call(null,c__19126__auto__,i__19960);
cljs.core.chunk_append.call(null,b__19961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19962 = (i__19960 + (1));
i__19960 = G__19962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19961),sablono$core$ordered_list19953_$_iter__19958.call(null,cljs.core.chunk_rest.call(null,s__19959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19961),null);
}
} else {
var x = cljs.core.first.call(null,s__19959__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list19953_$_iter__19958.call(null,cljs.core.rest.call(null,s__19959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19128__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19953);
/**
 * Create an image element.
 */
sablono.core.image19963 = (function sablono$core$image19963(var_args){
var args19964 = [];
var len__19414__auto___19967 = arguments.length;
var i__19415__auto___19968 = (0);
while(true){
if((i__19415__auto___19968 < len__19414__auto___19967)){
args19964.push((arguments[i__19415__auto___19968]));

var G__19969 = (i__19415__auto___19968 + (1));
i__19415__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var G__19966 = args19964.length;
switch (G__19966) {
case 1:
return sablono.core.image19963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19964.length)].join('')));

}
});

sablono.core.image19963.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image19963.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image19963.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19963);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__19971_SHARP_,p2__19972_SHARP_){
return [cljs.core.str(p1__19971_SHARP_),cljs.core.str("["),cljs.core.str(p2__19972_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__19973_SHARP_,p2__19974_SHARP_){
return [cljs.core.str(p1__19973_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19974_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field19975 = (function sablono$core$color_field19975(var_args){
var args19976 = [];
var len__19414__auto___20043 = arguments.length;
var i__19415__auto___20044 = (0);
while(true){
if((i__19415__auto___20044 < len__19414__auto___20043)){
args19976.push((arguments[i__19415__auto___20044]));

var G__20045 = (i__19415__auto___20044 + (1));
i__19415__auto___20044 = G__20045;
continue;
} else {
}
break;
}

var G__19978 = args19976.length;
switch (G__19978) {
case 1:
return sablono.core.color_field19975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19976.length)].join('')));

}
});

sablono.core.color_field19975.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.color_field19975.call(null,name__19896__auto__,null);
});

sablono.core.color_field19975.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.color_field19975.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19975);

/**
 * Creates a date input field.
 */
sablono.core.date_field19979 = (function sablono$core$date_field19979(var_args){
var args19980 = [];
var len__19414__auto___20047 = arguments.length;
var i__19415__auto___20048 = (0);
while(true){
if((i__19415__auto___20048 < len__19414__auto___20047)){
args19980.push((arguments[i__19415__auto___20048]));

var G__20049 = (i__19415__auto___20048 + (1));
i__19415__auto___20048 = G__20049;
continue;
} else {
}
break;
}

var G__19982 = args19980.length;
switch (G__19982) {
case 1:
return sablono.core.date_field19979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19980.length)].join('')));

}
});

sablono.core.date_field19979.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.date_field19979.call(null,name__19896__auto__,null);
});

sablono.core.date_field19979.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.date_field19979.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19979);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19983 = (function sablono$core$datetime_field19983(var_args){
var args19984 = [];
var len__19414__auto___20051 = arguments.length;
var i__19415__auto___20052 = (0);
while(true){
if((i__19415__auto___20052 < len__19414__auto___20051)){
args19984.push((arguments[i__19415__auto___20052]));

var G__20053 = (i__19415__auto___20052 + (1));
i__19415__auto___20052 = G__20053;
continue;
} else {
}
break;
}

var G__19986 = args19984.length;
switch (G__19986) {
case 1:
return sablono.core.datetime_field19983.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19983.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19984.length)].join('')));

}
});

sablono.core.datetime_field19983.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.datetime_field19983.call(null,name__19896__auto__,null);
});

sablono.core.datetime_field19983.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.datetime_field19983.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19983);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19987 = (function sablono$core$datetime_local_field19987(var_args){
var args19988 = [];
var len__19414__auto___20055 = arguments.length;
var i__19415__auto___20056 = (0);
while(true){
if((i__19415__auto___20056 < len__19414__auto___20055)){
args19988.push((arguments[i__19415__auto___20056]));

var G__20057 = (i__19415__auto___20056 + (1));
i__19415__auto___20056 = G__20057;
continue;
} else {
}
break;
}

var G__19990 = args19988.length;
switch (G__19990) {
case 1:
return sablono.core.datetime_local_field19987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19988.length)].join('')));

}
});

sablono.core.datetime_local_field19987.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.datetime_local_field19987.call(null,name__19896__auto__,null);
});

sablono.core.datetime_local_field19987.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.datetime_local_field19987.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19987);

/**
 * Creates a email input field.
 */
sablono.core.email_field19991 = (function sablono$core$email_field19991(var_args){
var args19992 = [];
var len__19414__auto___20059 = arguments.length;
var i__19415__auto___20060 = (0);
while(true){
if((i__19415__auto___20060 < len__19414__auto___20059)){
args19992.push((arguments[i__19415__auto___20060]));

var G__20061 = (i__19415__auto___20060 + (1));
i__19415__auto___20060 = G__20061;
continue;
} else {
}
break;
}

var G__19994 = args19992.length;
switch (G__19994) {
case 1:
return sablono.core.email_field19991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19992.length)].join('')));

}
});

sablono.core.email_field19991.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.email_field19991.call(null,name__19896__auto__,null);
});

sablono.core.email_field19991.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.email_field19991.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19991);

/**
 * Creates a file input field.
 */
sablono.core.file_field19995 = (function sablono$core$file_field19995(var_args){
var args19996 = [];
var len__19414__auto___20063 = arguments.length;
var i__19415__auto___20064 = (0);
while(true){
if((i__19415__auto___20064 < len__19414__auto___20063)){
args19996.push((arguments[i__19415__auto___20064]));

var G__20065 = (i__19415__auto___20064 + (1));
i__19415__auto___20064 = G__20065;
continue;
} else {
}
break;
}

var G__19998 = args19996.length;
switch (G__19998) {
case 1:
return sablono.core.file_field19995.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19995.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19996.length)].join('')));

}
});

sablono.core.file_field19995.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.file_field19995.call(null,name__19896__auto__,null);
});

sablono.core.file_field19995.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.file_field19995.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19995);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19999 = (function sablono$core$hidden_field19999(var_args){
var args20000 = [];
var len__19414__auto___20067 = arguments.length;
var i__19415__auto___20068 = (0);
while(true){
if((i__19415__auto___20068 < len__19414__auto___20067)){
args20000.push((arguments[i__19415__auto___20068]));

var G__20069 = (i__19415__auto___20068 + (1));
i__19415__auto___20068 = G__20069;
continue;
} else {
}
break;
}

var G__20002 = args20000.length;
switch (G__20002) {
case 1:
return sablono.core.hidden_field19999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20000.length)].join('')));

}
});

sablono.core.hidden_field19999.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.hidden_field19999.call(null,name__19896__auto__,null);
});

sablono.core.hidden_field19999.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.hidden_field19999.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19999);

/**
 * Creates a month input field.
 */
sablono.core.month_field20003 = (function sablono$core$month_field20003(var_args){
var args20004 = [];
var len__19414__auto___20071 = arguments.length;
var i__19415__auto___20072 = (0);
while(true){
if((i__19415__auto___20072 < len__19414__auto___20071)){
args20004.push((arguments[i__19415__auto___20072]));

var G__20073 = (i__19415__auto___20072 + (1));
i__19415__auto___20072 = G__20073;
continue;
} else {
}
break;
}

var G__20006 = args20004.length;
switch (G__20006) {
case 1:
return sablono.core.month_field20003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20004.length)].join('')));

}
});

sablono.core.month_field20003.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.month_field20003.call(null,name__19896__auto__,null);
});

sablono.core.month_field20003.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.month_field20003.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20003);

/**
 * Creates a number input field.
 */
sablono.core.number_field20007 = (function sablono$core$number_field20007(var_args){
var args20008 = [];
var len__19414__auto___20075 = arguments.length;
var i__19415__auto___20076 = (0);
while(true){
if((i__19415__auto___20076 < len__19414__auto___20075)){
args20008.push((arguments[i__19415__auto___20076]));

var G__20077 = (i__19415__auto___20076 + (1));
i__19415__auto___20076 = G__20077;
continue;
} else {
}
break;
}

var G__20010 = args20008.length;
switch (G__20010) {
case 1:
return sablono.core.number_field20007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20008.length)].join('')));

}
});

sablono.core.number_field20007.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.number_field20007.call(null,name__19896__auto__,null);
});

sablono.core.number_field20007.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.number_field20007.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20007);

/**
 * Creates a password input field.
 */
sablono.core.password_field20011 = (function sablono$core$password_field20011(var_args){
var args20012 = [];
var len__19414__auto___20079 = arguments.length;
var i__19415__auto___20080 = (0);
while(true){
if((i__19415__auto___20080 < len__19414__auto___20079)){
args20012.push((arguments[i__19415__auto___20080]));

var G__20081 = (i__19415__auto___20080 + (1));
i__19415__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var G__20014 = args20012.length;
switch (G__20014) {
case 1:
return sablono.core.password_field20011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20012.length)].join('')));

}
});

sablono.core.password_field20011.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.password_field20011.call(null,name__19896__auto__,null);
});

sablono.core.password_field20011.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.password_field20011.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20011);

/**
 * Creates a range input field.
 */
sablono.core.range_field20015 = (function sablono$core$range_field20015(var_args){
var args20016 = [];
var len__19414__auto___20083 = arguments.length;
var i__19415__auto___20084 = (0);
while(true){
if((i__19415__auto___20084 < len__19414__auto___20083)){
args20016.push((arguments[i__19415__auto___20084]));

var G__20085 = (i__19415__auto___20084 + (1));
i__19415__auto___20084 = G__20085;
continue;
} else {
}
break;
}

var G__20018 = args20016.length;
switch (G__20018) {
case 1:
return sablono.core.range_field20015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20016.length)].join('')));

}
});

sablono.core.range_field20015.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.range_field20015.call(null,name__19896__auto__,null);
});

sablono.core.range_field20015.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.range_field20015.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20015);

/**
 * Creates a search input field.
 */
sablono.core.search_field20019 = (function sablono$core$search_field20019(var_args){
var args20020 = [];
var len__19414__auto___20087 = arguments.length;
var i__19415__auto___20088 = (0);
while(true){
if((i__19415__auto___20088 < len__19414__auto___20087)){
args20020.push((arguments[i__19415__auto___20088]));

var G__20089 = (i__19415__auto___20088 + (1));
i__19415__auto___20088 = G__20089;
continue;
} else {
}
break;
}

var G__20022 = args20020.length;
switch (G__20022) {
case 1:
return sablono.core.search_field20019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20020.length)].join('')));

}
});

sablono.core.search_field20019.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.search_field20019.call(null,name__19896__auto__,null);
});

sablono.core.search_field20019.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.search_field20019.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20019);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20023 = (function sablono$core$tel_field20023(var_args){
var args20024 = [];
var len__19414__auto___20091 = arguments.length;
var i__19415__auto___20092 = (0);
while(true){
if((i__19415__auto___20092 < len__19414__auto___20091)){
args20024.push((arguments[i__19415__auto___20092]));

var G__20093 = (i__19415__auto___20092 + (1));
i__19415__auto___20092 = G__20093;
continue;
} else {
}
break;
}

var G__20026 = args20024.length;
switch (G__20026) {
case 1:
return sablono.core.tel_field20023.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20023.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20024.length)].join('')));

}
});

sablono.core.tel_field20023.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.tel_field20023.call(null,name__19896__auto__,null);
});

sablono.core.tel_field20023.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.tel_field20023.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20023);

/**
 * Creates a text input field.
 */
sablono.core.text_field20027 = (function sablono$core$text_field20027(var_args){
var args20028 = [];
var len__19414__auto___20095 = arguments.length;
var i__19415__auto___20096 = (0);
while(true){
if((i__19415__auto___20096 < len__19414__auto___20095)){
args20028.push((arguments[i__19415__auto___20096]));

var G__20097 = (i__19415__auto___20096 + (1));
i__19415__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var G__20030 = args20028.length;
switch (G__20030) {
case 1:
return sablono.core.text_field20027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20028.length)].join('')));

}
});

sablono.core.text_field20027.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.text_field20027.call(null,name__19896__auto__,null);
});

sablono.core.text_field20027.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.text_field20027.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20027);

/**
 * Creates a time input field.
 */
sablono.core.time_field20031 = (function sablono$core$time_field20031(var_args){
var args20032 = [];
var len__19414__auto___20099 = arguments.length;
var i__19415__auto___20100 = (0);
while(true){
if((i__19415__auto___20100 < len__19414__auto___20099)){
args20032.push((arguments[i__19415__auto___20100]));

var G__20101 = (i__19415__auto___20100 + (1));
i__19415__auto___20100 = G__20101;
continue;
} else {
}
break;
}

var G__20034 = args20032.length;
switch (G__20034) {
case 1:
return sablono.core.time_field20031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20032.length)].join('')));

}
});

sablono.core.time_field20031.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.time_field20031.call(null,name__19896__auto__,null);
});

sablono.core.time_field20031.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.time_field20031.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20031);

/**
 * Creates a url input field.
 */
sablono.core.url_field20035 = (function sablono$core$url_field20035(var_args){
var args20036 = [];
var len__19414__auto___20103 = arguments.length;
var i__19415__auto___20104 = (0);
while(true){
if((i__19415__auto___20104 < len__19414__auto___20103)){
args20036.push((arguments[i__19415__auto___20104]));

var G__20105 = (i__19415__auto___20104 + (1));
i__19415__auto___20104 = G__20105;
continue;
} else {
}
break;
}

var G__20038 = args20036.length;
switch (G__20038) {
case 1:
return sablono.core.url_field20035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20036.length)].join('')));

}
});

sablono.core.url_field20035.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.url_field20035.call(null,name__19896__auto__,null);
});

sablono.core.url_field20035.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.url_field20035.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20035);

/**
 * Creates a week input field.
 */
sablono.core.week_field20039 = (function sablono$core$week_field20039(var_args){
var args20040 = [];
var len__19414__auto___20107 = arguments.length;
var i__19415__auto___20108 = (0);
while(true){
if((i__19415__auto___20108 < len__19414__auto___20107)){
args20040.push((arguments[i__19415__auto___20108]));

var G__20109 = (i__19415__auto___20108 + (1));
i__19415__auto___20108 = G__20109;
continue;
} else {
}
break;
}

var G__20042 = args20040.length;
switch (G__20042) {
case 1:
return sablono.core.week_field20039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20040.length)].join('')));

}
});

sablono.core.week_field20039.cljs$core$IFn$_invoke$arity$1 = (function (name__19896__auto__){
return sablono.core.week_field20039.call(null,name__19896__auto__,null);
});

sablono.core.week_field20039.cljs$core$IFn$_invoke$arity$2 = (function (name__19896__auto__,value__19897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19896__auto__,value__19897__auto__);
});

sablono.core.week_field20039.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20039);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20111 = (function sablono$core$check_box20111(var_args){
var args20112 = [];
var len__19414__auto___20115 = arguments.length;
var i__19415__auto___20116 = (0);
while(true){
if((i__19415__auto___20116 < len__19414__auto___20115)){
args20112.push((arguments[i__19415__auto___20116]));

var G__20117 = (i__19415__auto___20116 + (1));
i__19415__auto___20116 = G__20117;
continue;
} else {
}
break;
}

var G__20114 = args20112.length;
switch (G__20114) {
case 1:
return sablono.core.check_box20111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20111.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20112.length)].join('')));

}
});

sablono.core.check_box20111.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20111.call(null,name,null);
});

sablono.core.check_box20111.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20111.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20111.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20111.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20111);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20119 = (function sablono$core$radio_button20119(var_args){
var args20120 = [];
var len__19414__auto___20123 = arguments.length;
var i__19415__auto___20124 = (0);
while(true){
if((i__19415__auto___20124 < len__19414__auto___20123)){
args20120.push((arguments[i__19415__auto___20124]));

var G__20125 = (i__19415__auto___20124 + (1));
i__19415__auto___20124 = G__20125;
continue;
} else {
}
break;
}

var G__20122 = args20120.length;
switch (G__20122) {
case 1:
return sablono.core.radio_button20119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20119.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20120.length)].join('')));

}
});

sablono.core.radio_button20119.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20119.call(null,group,null);
});

sablono.core.radio_button20119.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20119.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20119.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20119.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20119);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20127 = (function sablono$core$select_options20127(coll){
var iter__19128__auto__ = (function sablono$core$select_options20127_$_iter__20136(s__20137){
return (new cljs.core.LazySeq(null,(function (){
var s__20137__$1 = s__20137;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20137__$1);
if(temp__4657__auto__){
var s__20137__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20137__$2)){
var c__19126__auto__ = cljs.core.chunk_first.call(null,s__20137__$2);
var size__19127__auto__ = cljs.core.count.call(null,c__19126__auto__);
var b__20139 = cljs.core.chunk_buffer.call(null,size__19127__auto__);
if((function (){var i__20138 = (0);
while(true){
if((i__20138 < size__19127__auto__)){
var x = cljs.core._nth.call(null,c__19126__auto__,i__20138);
cljs.core.chunk_append.call(null,b__20139,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20142 = x;
var text = cljs.core.nth.call(null,vec__20142,(0),null);
var val = cljs.core.nth.call(null,vec__20142,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20142,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20127.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20144 = (i__20138 + (1));
i__20138 = G__20144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20139),sablono$core$select_options20127_$_iter__20136.call(null,cljs.core.chunk_rest.call(null,s__20137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20139),null);
}
} else {
var x = cljs.core.first.call(null,s__20137__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20143 = x;
var text = cljs.core.nth.call(null,vec__20143,(0),null);
var val = cljs.core.nth.call(null,vec__20143,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20143,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20127.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20127_$_iter__20136.call(null,cljs.core.rest.call(null,s__20137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19128__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20127);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20145 = (function sablono$core$drop_down20145(var_args){
var args20146 = [];
var len__19414__auto___20149 = arguments.length;
var i__19415__auto___20150 = (0);
while(true){
if((i__19415__auto___20150 < len__19414__auto___20149)){
args20146.push((arguments[i__19415__auto___20150]));

var G__20151 = (i__19415__auto___20150 + (1));
i__19415__auto___20150 = G__20151;
continue;
} else {
}
break;
}

var G__20148 = args20146.length;
switch (G__20148) {
case 2:
return sablono.core.drop_down20145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20145.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20146.length)].join('')));

}
});

sablono.core.drop_down20145.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20145.call(null,name,options,null);
});

sablono.core.drop_down20145.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20145.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20145);
/**
 * Creates a text area element.
 */
sablono.core.text_area20153 = (function sablono$core$text_area20153(var_args){
var args20154 = [];
var len__19414__auto___20157 = arguments.length;
var i__19415__auto___20158 = (0);
while(true){
if((i__19415__auto___20158 < len__19414__auto___20157)){
args20154.push((arguments[i__19415__auto___20158]));

var G__20159 = (i__19415__auto___20158 + (1));
i__19415__auto___20158 = G__20159;
continue;
} else {
}
break;
}

var G__20156 = args20154.length;
switch (G__20156) {
case 1:
return sablono.core.text_area20153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20154.length)].join('')));

}
});

sablono.core.text_area20153.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20153.call(null,name,null);
});

sablono.core.text_area20153.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area20153.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20153);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20161 = (function sablono$core$label20161(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20161);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20162 = (function sablono$core$submit_button20162(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20162);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20163 = (function sablono$core$reset_button20163(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20163);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20164 = (function sablono$core$form_to20164(var_args){
var args__19421__auto__ = [];
var len__19414__auto___20169 = arguments.length;
var i__19415__auto___20170 = (0);
while(true){
if((i__19415__auto___20170 < len__19414__auto___20169)){
args__19421__auto__.push((arguments[i__19415__auto___20170]));

var G__20171 = (i__19415__auto___20170 + (1));
i__19415__auto___20170 = G__20171;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((1) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((1)),(0))):null);
return sablono.core.form_to20164.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19422__auto__);
});

sablono.core.form_to20164.cljs$core$IFn$_invoke$arity$variadic = (function (p__20167,body){
var vec__20168 = p__20167;
var method = cljs.core.nth.call(null,vec__20168,(0),null);
var action = cljs.core.nth.call(null,vec__20168,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20164.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20164.cljs$lang$applyTo = (function (seq20165){
var G__20166 = cljs.core.first.call(null,seq20165);
var seq20165__$1 = cljs.core.next.call(null,seq20165);
return sablono.core.form_to20164.cljs$core$IFn$_invoke$arity$variadic(G__20166,seq20165__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20164);

//# sourceMappingURL=core.js.map?rel=1455922158061