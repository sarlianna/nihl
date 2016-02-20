// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20554 = [];
var len__19414__auto___20560 = arguments.length;
var i__19415__auto___20561 = (0);
while(true){
if((i__19415__auto___20561 < len__19414__auto___20560)){
args20554.push((arguments[i__19415__auto___20561]));

var G__20562 = (i__19415__auto___20561 + (1));
i__19415__auto___20561 = G__20562;
continue;
} else {
}
break;
}

var G__20556 = args20554.length;
switch (G__20556) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20554.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20557 = (function (f,blockable,meta20558){
this.f = f;
this.blockable = blockable;
this.meta20558 = meta20558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20559,meta20558__$1){
var self__ = this;
var _20559__$1 = this;
return (new cljs.core.async.t_cljs$core$async20557(self__.f,self__.blockable,meta20558__$1));
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20559){
var self__ = this;
var _20559__$1 = this;
return self__.meta20558;
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20558","meta20558",-1551737607,null)], null);
});

cljs.core.async.t_cljs$core$async20557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20557";

cljs.core.async.t_cljs$core$async20557.cljs$lang$ctorPrWriter = (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async20557");
});

cljs.core.async.__GT_t_cljs$core$async20557 = (function cljs$core$async$__GT_t_cljs$core$async20557(f__$1,blockable__$1,meta20558){
return (new cljs.core.async.t_cljs$core$async20557(f__$1,blockable__$1,meta20558));
});

}

return (new cljs.core.async.t_cljs$core$async20557(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20566 = [];
var len__19414__auto___20569 = arguments.length;
var i__19415__auto___20570 = (0);
while(true){
if((i__19415__auto___20570 < len__19414__auto___20569)){
args20566.push((arguments[i__19415__auto___20570]));

var G__20571 = (i__19415__auto___20570 + (1));
i__19415__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var G__20568 = args20566.length;
switch (G__20568) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20566.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20573 = [];
var len__19414__auto___20576 = arguments.length;
var i__19415__auto___20577 = (0);
while(true){
if((i__19415__auto___20577 < len__19414__auto___20576)){
args20573.push((arguments[i__19415__auto___20577]));

var G__20578 = (i__19415__auto___20577 + (1));
i__19415__auto___20577 = G__20578;
continue;
} else {
}
break;
}

var G__20575 = args20573.length;
switch (G__20575) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20573.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20580 = [];
var len__19414__auto___20583 = arguments.length;
var i__19415__auto___20584 = (0);
while(true){
if((i__19415__auto___20584 < len__19414__auto___20583)){
args20580.push((arguments[i__19415__auto___20584]));

var G__20585 = (i__19415__auto___20584 + (1));
i__19415__auto___20584 = G__20585;
continue;
} else {
}
break;
}

var G__20582 = args20580.length;
switch (G__20582) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20580.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20587 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20587);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20587,ret){
return (function (){
return fn1.call(null,val_20587);
});})(val_20587,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20588 = [];
var len__19414__auto___20591 = arguments.length;
var i__19415__auto___20592 = (0);
while(true){
if((i__19415__auto___20592 < len__19414__auto___20591)){
args20588.push((arguments[i__19415__auto___20592]));

var G__20593 = (i__19415__auto___20592 + (1));
i__19415__auto___20592 = G__20593;
continue;
} else {
}
break;
}

var G__20590 = args20588.length;
switch (G__20590) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20588.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19259__auto___20595 = n;
var x_20596 = (0);
while(true){
if((x_20596 < n__19259__auto___20595)){
(a[x_20596] = (0));

var G__20597 = (x_20596 + (1));
x_20596 = G__20597;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20598 = (i + (1));
i = G__20598;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20602 = (function (alt_flag,flag,meta20603){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20603 = meta20603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20604,meta20603__$1){
var self__ = this;
var _20604__$1 = this;
return (new cljs.core.async.t_cljs$core$async20602(self__.alt_flag,self__.flag,meta20603__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20604){
var self__ = this;
var _20604__$1 = this;
return self__.meta20603;
});})(flag))
;

cljs.core.async.t_cljs$core$async20602.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20602.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20603","meta20603",-678114289,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20602";

cljs.core.async.t_cljs$core$async20602.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async20602");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20602 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20602(alt_flag__$1,flag__$1,meta20603){
return (new cljs.core.async.t_cljs$core$async20602(alt_flag__$1,flag__$1,meta20603));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20602(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20608 = (function (alt_handler,flag,cb,meta20609){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20609 = meta20609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20610,meta20609__$1){
var self__ = this;
var _20610__$1 = this;
return (new cljs.core.async.t_cljs$core$async20608(self__.alt_handler,self__.flag,self__.cb,meta20609__$1));
});

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20610){
var self__ = this;
var _20610__$1 = this;
return self__.meta20609;
});

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20609","meta20609",-2043525144,null)], null);
});

cljs.core.async.t_cljs$core$async20608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20608";

cljs.core.async.t_cljs$core$async20608.cljs$lang$ctorPrWriter = (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async20608");
});

cljs.core.async.__GT_t_cljs$core$async20608 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20608(alt_handler__$1,flag__$1,cb__$1,meta20609){
return (new cljs.core.async.t_cljs$core$async20608(alt_handler__$1,flag__$1,cb__$1,meta20609));
});

}

return (new cljs.core.async.t_cljs$core$async20608(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20611_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20611_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20612_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20612_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18356__auto__ = wport;
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20613 = (i + (1));
i = G__20613;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18356__auto__ = ret;
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18344__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18344__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18344__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19421__auto__ = [];
var len__19414__auto___20619 = arguments.length;
var i__19415__auto___20620 = (0);
while(true){
if((i__19415__auto___20620 < len__19414__auto___20619)){
args__19421__auto__.push((arguments[i__19415__auto___20620]));

var G__20621 = (i__19415__auto___20620 + (1));
i__19415__auto___20620 = G__20621;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((1) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19422__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20616){
var map__20617 = p__20616;
var map__20617__$1 = ((((!((map__20617 == null)))?((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20617):map__20617);
var opts = map__20617__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20614){
var G__20615 = cljs.core.first.call(null,seq20614);
var seq20614__$1 = cljs.core.next.call(null,seq20614);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20615,seq20614__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20622 = [];
var len__19414__auto___20672 = arguments.length;
var i__19415__auto___20673 = (0);
while(true){
if((i__19415__auto___20673 < len__19414__auto___20672)){
args20622.push((arguments[i__19415__auto___20673]));

var G__20674 = (i__19415__auto___20673 + (1));
i__19415__auto___20673 = G__20674;
continue;
} else {
}
break;
}

var G__20624 = args20622.length;
switch (G__20624) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20622.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20509__auto___20676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___20676){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___20676){
return (function (state_20648){
var state_val_20649 = (state_20648[(1)]);
if((state_val_20649 === (7))){
var inst_20644 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20650_20677 = state_20648__$1;
(statearr_20650_20677[(2)] = inst_20644);

(statearr_20650_20677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (1))){
var state_20648__$1 = state_20648;
var statearr_20651_20678 = state_20648__$1;
(statearr_20651_20678[(2)] = null);

(statearr_20651_20678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (4))){
var inst_20627 = (state_20648[(7)]);
var inst_20627__$1 = (state_20648[(2)]);
var inst_20628 = (inst_20627__$1 == null);
var state_20648__$1 = (function (){var statearr_20652 = state_20648;
(statearr_20652[(7)] = inst_20627__$1);

return statearr_20652;
})();
if(cljs.core.truth_(inst_20628)){
var statearr_20653_20679 = state_20648__$1;
(statearr_20653_20679[(1)] = (5));

} else {
var statearr_20654_20680 = state_20648__$1;
(statearr_20654_20680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (13))){
var state_20648__$1 = state_20648;
var statearr_20655_20681 = state_20648__$1;
(statearr_20655_20681[(2)] = null);

(statearr_20655_20681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (6))){
var inst_20627 = (state_20648[(7)]);
var state_20648__$1 = state_20648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20648__$1,(11),to,inst_20627);
} else {
if((state_val_20649 === (3))){
var inst_20646 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20648__$1,inst_20646);
} else {
if((state_val_20649 === (12))){
var state_20648__$1 = state_20648;
var statearr_20656_20682 = state_20648__$1;
(statearr_20656_20682[(2)] = null);

(statearr_20656_20682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (2))){
var state_20648__$1 = state_20648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20648__$1,(4),from);
} else {
if((state_val_20649 === (11))){
var inst_20637 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
if(cljs.core.truth_(inst_20637)){
var statearr_20657_20683 = state_20648__$1;
(statearr_20657_20683[(1)] = (12));

} else {
var statearr_20658_20684 = state_20648__$1;
(statearr_20658_20684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (9))){
var state_20648__$1 = state_20648;
var statearr_20659_20685 = state_20648__$1;
(statearr_20659_20685[(2)] = null);

(statearr_20659_20685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (5))){
var state_20648__$1 = state_20648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20660_20686 = state_20648__$1;
(statearr_20660_20686[(1)] = (8));

} else {
var statearr_20661_20687 = state_20648__$1;
(statearr_20661_20687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (14))){
var inst_20642 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20662_20688 = state_20648__$1;
(statearr_20662_20688[(2)] = inst_20642);

(statearr_20662_20688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (10))){
var inst_20634 = (state_20648[(2)]);
var state_20648__$1 = state_20648;
var statearr_20663_20689 = state_20648__$1;
(statearr_20663_20689[(2)] = inst_20634);

(statearr_20663_20689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20649 === (8))){
var inst_20631 = cljs.core.async.close_BANG_.call(null,to);
var state_20648__$1 = state_20648;
var statearr_20664_20690 = state_20648__$1;
(statearr_20664_20690[(2)] = inst_20631);

(statearr_20664_20690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___20676))
;
return ((function (switch__20397__auto__,c__20509__auto___20676){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_20668 = [null,null,null,null,null,null,null,null];
(statearr_20668[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_20668[(1)] = (1));

return statearr_20668;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_20648){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_20648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e20669){if((e20669 instanceof Object)){
var ex__20401__auto__ = e20669;
var statearr_20670_20691 = state_20648;
(statearr_20670_20691[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20692 = state_20648;
state_20648 = G__20692;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_20648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_20648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___20676))
})();
var state__20511__auto__ = (function (){var statearr_20671 = f__20510__auto__.call(null);
(statearr_20671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___20676);

return statearr_20671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___20676))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20876){
var vec__20877 = p__20876;
var v = cljs.core.nth.call(null,vec__20877,(0),null);
var p = cljs.core.nth.call(null,vec__20877,(1),null);
var job = vec__20877;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20509__auto___21059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___21059,res,vec__20877,v,p,job,jobs,results){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___21059,res,vec__20877,v,p,job,jobs,results){
return (function (state_20882){
var state_val_20883 = (state_20882[(1)]);
if((state_val_20883 === (1))){
var state_20882__$1 = state_20882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20882__$1,(2),res,v);
} else {
if((state_val_20883 === (2))){
var inst_20879 = (state_20882[(2)]);
var inst_20880 = cljs.core.async.close_BANG_.call(null,res);
var state_20882__$1 = (function (){var statearr_20884 = state_20882;
(statearr_20884[(7)] = inst_20879);

return statearr_20884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20882__$1,inst_20880);
} else {
return null;
}
}
});})(c__20509__auto___21059,res,vec__20877,v,p,job,jobs,results))
;
return ((function (switch__20397__auto__,c__20509__auto___21059,res,vec__20877,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0 = (function (){
var statearr_20888 = [null,null,null,null,null,null,null,null];
(statearr_20888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__);

(statearr_20888[(1)] = (1));

return statearr_20888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1 = (function (state_20882){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_20882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e20889){if((e20889 instanceof Object)){
var ex__20401__auto__ = e20889;
var statearr_20890_21060 = state_20882;
(statearr_20890_21060[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21061 = state_20882;
state_20882 = G__21061;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = function(state_20882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1.call(this,state_20882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___21059,res,vec__20877,v,p,job,jobs,results))
})();
var state__20511__auto__ = (function (){var statearr_20891 = f__20510__auto__.call(null);
(statearr_20891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___21059);

return statearr_20891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___21059,res,vec__20877,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20892){
var vec__20893 = p__20892;
var v = cljs.core.nth.call(null,vec__20893,(0),null);
var p = cljs.core.nth.call(null,vec__20893,(1),null);
var job = vec__20893;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19259__auto___21062 = n;
var __21063 = (0);
while(true){
if((__21063 < n__19259__auto___21062)){
var G__20894_21064 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20894_21064) {
case "compute":
var c__20509__auto___21066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21063,c__20509__auto___21066,G__20894_21064,n__19259__auto___21062,jobs,results,process,async){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (__21063,c__20509__auto___21066,G__20894_21064,n__19259__auto___21062,jobs,results,process,async){
return (function (state_20907){
var state_val_20908 = (state_20907[(1)]);
if((state_val_20908 === (1))){
var state_20907__$1 = state_20907;
var statearr_20909_21067 = state_20907__$1;
(statearr_20909_21067[(2)] = null);

(statearr_20909_21067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20908 === (2))){
var state_20907__$1 = state_20907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20907__$1,(4),jobs);
} else {
if((state_val_20908 === (3))){
var inst_20905 = (state_20907[(2)]);
var state_20907__$1 = state_20907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20907__$1,inst_20905);
} else {
if((state_val_20908 === (4))){
var inst_20897 = (state_20907[(2)]);
var inst_20898 = process.call(null,inst_20897);
var state_20907__$1 = state_20907;
if(cljs.core.truth_(inst_20898)){
var statearr_20910_21068 = state_20907__$1;
(statearr_20910_21068[(1)] = (5));

} else {
var statearr_20911_21069 = state_20907__$1;
(statearr_20911_21069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20908 === (5))){
var state_20907__$1 = state_20907;
var statearr_20912_21070 = state_20907__$1;
(statearr_20912_21070[(2)] = null);

(statearr_20912_21070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20908 === (6))){
var state_20907__$1 = state_20907;
var statearr_20913_21071 = state_20907__$1;
(statearr_20913_21071[(2)] = null);

(statearr_20913_21071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20908 === (7))){
var inst_20903 = (state_20907[(2)]);
var state_20907__$1 = state_20907;
var statearr_20914_21072 = state_20907__$1;
(statearr_20914_21072[(2)] = inst_20903);

(statearr_20914_21072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21063,c__20509__auto___21066,G__20894_21064,n__19259__auto___21062,jobs,results,process,async))
;
return ((function (__21063,switch__20397__auto__,c__20509__auto___21066,G__20894_21064,n__19259__auto___21062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0 = (function (){
var statearr_20918 = [null,null,null,null,null,null,null];
(statearr_20918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__);

(statearr_20918[(1)] = (1));

return statearr_20918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1 = (function (state_20907){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_20907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e20919){if((e20919 instanceof Object)){
var ex__20401__auto__ = e20919;
var statearr_20920_21073 = state_20907;
(statearr_20920_21073[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21074 = state_20907;
state_20907 = G__21074;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = function(state_20907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1.call(this,state_20907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__;
})()
;})(__21063,switch__20397__auto__,c__20509__auto___21066,G__20894_21064,n__19259__auto___21062,jobs,results,process,async))
})();
var state__20511__auto__ = (function (){var statearr_20921 = f__20510__auto__.call(null);
(statearr_20921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___21066);

return statearr_20921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(__21063,c__20509__auto___21066,G__20894_21064,n__19259__auto___21062,jobs,results,process,async))
);


break;
case "async":
var c__20509__auto___21075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21063,c__20509__auto___21075,G__20894_21064,n__19259__auto___21062,jobs,results,process,async){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (__21063,c__20509__auto___21075,G__20894_21064,n__19259__auto___21062,jobs,results,process,async){
return (function (state_20934){
var state_val_20935 = (state_20934[(1)]);
if((state_val_20935 === (1))){
var state_20934__$1 = state_20934;
var statearr_20936_21076 = state_20934__$1;
(statearr_20936_21076[(2)] = null);

(statearr_20936_21076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (2))){
var state_20934__$1 = state_20934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20934__$1,(4),jobs);
} else {
if((state_val_20935 === (3))){
var inst_20932 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20934__$1,inst_20932);
} else {
if((state_val_20935 === (4))){
var inst_20924 = (state_20934[(2)]);
var inst_20925 = async.call(null,inst_20924);
var state_20934__$1 = state_20934;
if(cljs.core.truth_(inst_20925)){
var statearr_20937_21077 = state_20934__$1;
(statearr_20937_21077[(1)] = (5));

} else {
var statearr_20938_21078 = state_20934__$1;
(statearr_20938_21078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (5))){
var state_20934__$1 = state_20934;
var statearr_20939_21079 = state_20934__$1;
(statearr_20939_21079[(2)] = null);

(statearr_20939_21079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (6))){
var state_20934__$1 = state_20934;
var statearr_20940_21080 = state_20934__$1;
(statearr_20940_21080[(2)] = null);

(statearr_20940_21080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (7))){
var inst_20930 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
var statearr_20941_21081 = state_20934__$1;
(statearr_20941_21081[(2)] = inst_20930);

(statearr_20941_21081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21063,c__20509__auto___21075,G__20894_21064,n__19259__auto___21062,jobs,results,process,async))
;
return ((function (__21063,switch__20397__auto__,c__20509__auto___21075,G__20894_21064,n__19259__auto___21062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0 = (function (){
var statearr_20945 = [null,null,null,null,null,null,null];
(statearr_20945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__);

(statearr_20945[(1)] = (1));

return statearr_20945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1 = (function (state_20934){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_20934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e20946){if((e20946 instanceof Object)){
var ex__20401__auto__ = e20946;
var statearr_20947_21082 = state_20934;
(statearr_20947_21082[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21083 = state_20934;
state_20934 = G__21083;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = function(state_20934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1.call(this,state_20934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__;
})()
;})(__21063,switch__20397__auto__,c__20509__auto___21075,G__20894_21064,n__19259__auto___21062,jobs,results,process,async))
})();
var state__20511__auto__ = (function (){var statearr_20948 = f__20510__auto__.call(null);
(statearr_20948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___21075);

return statearr_20948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(__21063,c__20509__auto___21075,G__20894_21064,n__19259__auto___21062,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21084 = (__21063 + (1));
__21063 = G__21084;
continue;
} else {
}
break;
}

var c__20509__auto___21085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___21085,jobs,results,process,async){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___21085,jobs,results,process,async){
return (function (state_20970){
var state_val_20971 = (state_20970[(1)]);
if((state_val_20971 === (1))){
var state_20970__$1 = state_20970;
var statearr_20972_21086 = state_20970__$1;
(statearr_20972_21086[(2)] = null);

(statearr_20972_21086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (2))){
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(4),from);
} else {
if((state_val_20971 === (3))){
var inst_20968 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20970__$1,inst_20968);
} else {
if((state_val_20971 === (4))){
var inst_20951 = (state_20970[(7)]);
var inst_20951__$1 = (state_20970[(2)]);
var inst_20952 = (inst_20951__$1 == null);
var state_20970__$1 = (function (){var statearr_20973 = state_20970;
(statearr_20973[(7)] = inst_20951__$1);

return statearr_20973;
})();
if(cljs.core.truth_(inst_20952)){
var statearr_20974_21087 = state_20970__$1;
(statearr_20974_21087[(1)] = (5));

} else {
var statearr_20975_21088 = state_20970__$1;
(statearr_20975_21088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (5))){
var inst_20954 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20970__$1 = state_20970;
var statearr_20976_21089 = state_20970__$1;
(statearr_20976_21089[(2)] = inst_20954);

(statearr_20976_21089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (6))){
var inst_20951 = (state_20970[(7)]);
var inst_20956 = (state_20970[(8)]);
var inst_20956__$1 = cljs.core.async.chan.call(null,(1));
var inst_20957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20958 = [inst_20951,inst_20956__$1];
var inst_20959 = (new cljs.core.PersistentVector(null,2,(5),inst_20957,inst_20958,null));
var state_20970__$1 = (function (){var statearr_20977 = state_20970;
(statearr_20977[(8)] = inst_20956__$1);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20970__$1,(8),jobs,inst_20959);
} else {
if((state_val_20971 === (7))){
var inst_20966 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20978_21090 = state_20970__$1;
(statearr_20978_21090[(2)] = inst_20966);

(statearr_20978_21090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (8))){
var inst_20956 = (state_20970[(8)]);
var inst_20961 = (state_20970[(2)]);
var state_20970__$1 = (function (){var statearr_20979 = state_20970;
(statearr_20979[(9)] = inst_20961);

return statearr_20979;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20970__$1,(9),results,inst_20956);
} else {
if((state_val_20971 === (9))){
var inst_20963 = (state_20970[(2)]);
var state_20970__$1 = (function (){var statearr_20980 = state_20970;
(statearr_20980[(10)] = inst_20963);

return statearr_20980;
})();
var statearr_20981_21091 = state_20970__$1;
(statearr_20981_21091[(2)] = null);

(statearr_20981_21091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___21085,jobs,results,process,async))
;
return ((function (switch__20397__auto__,c__20509__auto___21085,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0 = (function (){
var statearr_20985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__);

(statearr_20985[(1)] = (1));

return statearr_20985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1 = (function (state_20970){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_20970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e20986){if((e20986 instanceof Object)){
var ex__20401__auto__ = e20986;
var statearr_20987_21092 = state_20970;
(statearr_20987_21092[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21093 = state_20970;
state_20970 = G__21093;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = function(state_20970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1.call(this,state_20970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___21085,jobs,results,process,async))
})();
var state__20511__auto__ = (function (){var statearr_20988 = f__20510__auto__.call(null);
(statearr_20988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___21085);

return statearr_20988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___21085,jobs,results,process,async))
);


var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__,jobs,results,process,async){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__,jobs,results,process,async){
return (function (state_21026){
var state_val_21027 = (state_21026[(1)]);
if((state_val_21027 === (7))){
var inst_21022 = (state_21026[(2)]);
var state_21026__$1 = state_21026;
var statearr_21028_21094 = state_21026__$1;
(statearr_21028_21094[(2)] = inst_21022);

(statearr_21028_21094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (20))){
var state_21026__$1 = state_21026;
var statearr_21029_21095 = state_21026__$1;
(statearr_21029_21095[(2)] = null);

(statearr_21029_21095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (1))){
var state_21026__$1 = state_21026;
var statearr_21030_21096 = state_21026__$1;
(statearr_21030_21096[(2)] = null);

(statearr_21030_21096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (4))){
var inst_20991 = (state_21026[(7)]);
var inst_20991__$1 = (state_21026[(2)]);
var inst_20992 = (inst_20991__$1 == null);
var state_21026__$1 = (function (){var statearr_21031 = state_21026;
(statearr_21031[(7)] = inst_20991__$1);

return statearr_21031;
})();
if(cljs.core.truth_(inst_20992)){
var statearr_21032_21097 = state_21026__$1;
(statearr_21032_21097[(1)] = (5));

} else {
var statearr_21033_21098 = state_21026__$1;
(statearr_21033_21098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (15))){
var inst_21004 = (state_21026[(8)]);
var state_21026__$1 = state_21026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21026__$1,(18),to,inst_21004);
} else {
if((state_val_21027 === (21))){
var inst_21017 = (state_21026[(2)]);
var state_21026__$1 = state_21026;
var statearr_21034_21099 = state_21026__$1;
(statearr_21034_21099[(2)] = inst_21017);

(statearr_21034_21099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (13))){
var inst_21019 = (state_21026[(2)]);
var state_21026__$1 = (function (){var statearr_21035 = state_21026;
(statearr_21035[(9)] = inst_21019);

return statearr_21035;
})();
var statearr_21036_21100 = state_21026__$1;
(statearr_21036_21100[(2)] = null);

(statearr_21036_21100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (6))){
var inst_20991 = (state_21026[(7)]);
var state_21026__$1 = state_21026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21026__$1,(11),inst_20991);
} else {
if((state_val_21027 === (17))){
var inst_21012 = (state_21026[(2)]);
var state_21026__$1 = state_21026;
if(cljs.core.truth_(inst_21012)){
var statearr_21037_21101 = state_21026__$1;
(statearr_21037_21101[(1)] = (19));

} else {
var statearr_21038_21102 = state_21026__$1;
(statearr_21038_21102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (3))){
var inst_21024 = (state_21026[(2)]);
var state_21026__$1 = state_21026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21026__$1,inst_21024);
} else {
if((state_val_21027 === (12))){
var inst_21001 = (state_21026[(10)]);
var state_21026__$1 = state_21026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21026__$1,(14),inst_21001);
} else {
if((state_val_21027 === (2))){
var state_21026__$1 = state_21026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21026__$1,(4),results);
} else {
if((state_val_21027 === (19))){
var state_21026__$1 = state_21026;
var statearr_21039_21103 = state_21026__$1;
(statearr_21039_21103[(2)] = null);

(statearr_21039_21103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (11))){
var inst_21001 = (state_21026[(2)]);
var state_21026__$1 = (function (){var statearr_21040 = state_21026;
(statearr_21040[(10)] = inst_21001);

return statearr_21040;
})();
var statearr_21041_21104 = state_21026__$1;
(statearr_21041_21104[(2)] = null);

(statearr_21041_21104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (9))){
var state_21026__$1 = state_21026;
var statearr_21042_21105 = state_21026__$1;
(statearr_21042_21105[(2)] = null);

(statearr_21042_21105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (5))){
var state_21026__$1 = state_21026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21043_21106 = state_21026__$1;
(statearr_21043_21106[(1)] = (8));

} else {
var statearr_21044_21107 = state_21026__$1;
(statearr_21044_21107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (14))){
var inst_21004 = (state_21026[(8)]);
var inst_21006 = (state_21026[(11)]);
var inst_21004__$1 = (state_21026[(2)]);
var inst_21005 = (inst_21004__$1 == null);
var inst_21006__$1 = cljs.core.not.call(null,inst_21005);
var state_21026__$1 = (function (){var statearr_21045 = state_21026;
(statearr_21045[(8)] = inst_21004__$1);

(statearr_21045[(11)] = inst_21006__$1);

return statearr_21045;
})();
if(inst_21006__$1){
var statearr_21046_21108 = state_21026__$1;
(statearr_21046_21108[(1)] = (15));

} else {
var statearr_21047_21109 = state_21026__$1;
(statearr_21047_21109[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (16))){
var inst_21006 = (state_21026[(11)]);
var state_21026__$1 = state_21026;
var statearr_21048_21110 = state_21026__$1;
(statearr_21048_21110[(2)] = inst_21006);

(statearr_21048_21110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (10))){
var inst_20998 = (state_21026[(2)]);
var state_21026__$1 = state_21026;
var statearr_21049_21111 = state_21026__$1;
(statearr_21049_21111[(2)] = inst_20998);

(statearr_21049_21111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (18))){
var inst_21009 = (state_21026[(2)]);
var state_21026__$1 = state_21026;
var statearr_21050_21112 = state_21026__$1;
(statearr_21050_21112[(2)] = inst_21009);

(statearr_21050_21112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21027 === (8))){
var inst_20995 = cljs.core.async.close_BANG_.call(null,to);
var state_21026__$1 = state_21026;
var statearr_21051_21113 = state_21026__$1;
(statearr_21051_21113[(2)] = inst_20995);

(statearr_21051_21113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto__,jobs,results,process,async))
;
return ((function (switch__20397__auto__,c__20509__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0 = (function (){
var statearr_21055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__);

(statearr_21055[(1)] = (1));

return statearr_21055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1 = (function (state_21026){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_21026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e21056){if((e21056 instanceof Object)){
var ex__20401__auto__ = e21056;
var statearr_21057_21114 = state_21026;
(statearr_21057_21114[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21115 = state_21026;
state_21026 = G__21115;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__ = function(state_21026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1.call(this,state_21026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20398__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__,jobs,results,process,async))
})();
var state__20511__auto__ = (function (){var statearr_21058 = f__20510__auto__.call(null);
(statearr_21058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_21058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__,jobs,results,process,async))
);

return c__20509__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21116 = [];
var len__19414__auto___21119 = arguments.length;
var i__19415__auto___21120 = (0);
while(true){
if((i__19415__auto___21120 < len__19414__auto___21119)){
args21116.push((arguments[i__19415__auto___21120]));

var G__21121 = (i__19415__auto___21120 + (1));
i__19415__auto___21120 = G__21121;
continue;
} else {
}
break;
}

var G__21118 = args21116.length;
switch (G__21118) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21116.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21123 = [];
var len__19414__auto___21126 = arguments.length;
var i__19415__auto___21127 = (0);
while(true){
if((i__19415__auto___21127 < len__19414__auto___21126)){
args21123.push((arguments[i__19415__auto___21127]));

var G__21128 = (i__19415__auto___21127 + (1));
i__19415__auto___21127 = G__21128;
continue;
} else {
}
break;
}

var G__21125 = args21123.length;
switch (G__21125) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21123.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21130 = [];
var len__19414__auto___21183 = arguments.length;
var i__19415__auto___21184 = (0);
while(true){
if((i__19415__auto___21184 < len__19414__auto___21183)){
args21130.push((arguments[i__19415__auto___21184]));

var G__21185 = (i__19415__auto___21184 + (1));
i__19415__auto___21184 = G__21185;
continue;
} else {
}
break;
}

var G__21132 = args21130.length;
switch (G__21132) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21130.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20509__auto___21187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___21187,tc,fc){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___21187,tc,fc){
return (function (state_21158){
var state_val_21159 = (state_21158[(1)]);
if((state_val_21159 === (7))){
var inst_21154 = (state_21158[(2)]);
var state_21158__$1 = state_21158;
var statearr_21160_21188 = state_21158__$1;
(statearr_21160_21188[(2)] = inst_21154);

(statearr_21160_21188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (1))){
var state_21158__$1 = state_21158;
var statearr_21161_21189 = state_21158__$1;
(statearr_21161_21189[(2)] = null);

(statearr_21161_21189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (4))){
var inst_21135 = (state_21158[(7)]);
var inst_21135__$1 = (state_21158[(2)]);
var inst_21136 = (inst_21135__$1 == null);
var state_21158__$1 = (function (){var statearr_21162 = state_21158;
(statearr_21162[(7)] = inst_21135__$1);

return statearr_21162;
})();
if(cljs.core.truth_(inst_21136)){
var statearr_21163_21190 = state_21158__$1;
(statearr_21163_21190[(1)] = (5));

} else {
var statearr_21164_21191 = state_21158__$1;
(statearr_21164_21191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (13))){
var state_21158__$1 = state_21158;
var statearr_21165_21192 = state_21158__$1;
(statearr_21165_21192[(2)] = null);

(statearr_21165_21192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (6))){
var inst_21135 = (state_21158[(7)]);
var inst_21141 = p.call(null,inst_21135);
var state_21158__$1 = state_21158;
if(cljs.core.truth_(inst_21141)){
var statearr_21166_21193 = state_21158__$1;
(statearr_21166_21193[(1)] = (9));

} else {
var statearr_21167_21194 = state_21158__$1;
(statearr_21167_21194[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (3))){
var inst_21156 = (state_21158[(2)]);
var state_21158__$1 = state_21158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21158__$1,inst_21156);
} else {
if((state_val_21159 === (12))){
var state_21158__$1 = state_21158;
var statearr_21168_21195 = state_21158__$1;
(statearr_21168_21195[(2)] = null);

(statearr_21168_21195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (2))){
var state_21158__$1 = state_21158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21158__$1,(4),ch);
} else {
if((state_val_21159 === (11))){
var inst_21135 = (state_21158[(7)]);
var inst_21145 = (state_21158[(2)]);
var state_21158__$1 = state_21158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21158__$1,(8),inst_21145,inst_21135);
} else {
if((state_val_21159 === (9))){
var state_21158__$1 = state_21158;
var statearr_21169_21196 = state_21158__$1;
(statearr_21169_21196[(2)] = tc);

(statearr_21169_21196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (5))){
var inst_21138 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21139 = cljs.core.async.close_BANG_.call(null,fc);
var state_21158__$1 = (function (){var statearr_21170 = state_21158;
(statearr_21170[(8)] = inst_21138);

return statearr_21170;
})();
var statearr_21171_21197 = state_21158__$1;
(statearr_21171_21197[(2)] = inst_21139);

(statearr_21171_21197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (14))){
var inst_21152 = (state_21158[(2)]);
var state_21158__$1 = state_21158;
var statearr_21172_21198 = state_21158__$1;
(statearr_21172_21198[(2)] = inst_21152);

(statearr_21172_21198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (10))){
var state_21158__$1 = state_21158;
var statearr_21173_21199 = state_21158__$1;
(statearr_21173_21199[(2)] = fc);

(statearr_21173_21199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21159 === (8))){
var inst_21147 = (state_21158[(2)]);
var state_21158__$1 = state_21158;
if(cljs.core.truth_(inst_21147)){
var statearr_21174_21200 = state_21158__$1;
(statearr_21174_21200[(1)] = (12));

} else {
var statearr_21175_21201 = state_21158__$1;
(statearr_21175_21201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___21187,tc,fc))
;
return ((function (switch__20397__auto__,c__20509__auto___21187,tc,fc){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_21179 = [null,null,null,null,null,null,null,null,null];
(statearr_21179[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_21179[(1)] = (1));

return statearr_21179;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_21158){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_21158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e21180){if((e21180 instanceof Object)){
var ex__20401__auto__ = e21180;
var statearr_21181_21202 = state_21158;
(statearr_21181_21202[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21203 = state_21158;
state_21158 = G__21203;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_21158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_21158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___21187,tc,fc))
})();
var state__20511__auto__ = (function (){var statearr_21182 = f__20510__auto__.call(null);
(statearr_21182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___21187);

return statearr_21182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___21187,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__){
return (function (state_21267){
var state_val_21268 = (state_21267[(1)]);
if((state_val_21268 === (7))){
var inst_21263 = (state_21267[(2)]);
var state_21267__$1 = state_21267;
var statearr_21269_21290 = state_21267__$1;
(statearr_21269_21290[(2)] = inst_21263);

(statearr_21269_21290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (1))){
var inst_21247 = init;
var state_21267__$1 = (function (){var statearr_21270 = state_21267;
(statearr_21270[(7)] = inst_21247);

return statearr_21270;
})();
var statearr_21271_21291 = state_21267__$1;
(statearr_21271_21291[(2)] = null);

(statearr_21271_21291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (4))){
var inst_21250 = (state_21267[(8)]);
var inst_21250__$1 = (state_21267[(2)]);
var inst_21251 = (inst_21250__$1 == null);
var state_21267__$1 = (function (){var statearr_21272 = state_21267;
(statearr_21272[(8)] = inst_21250__$1);

return statearr_21272;
})();
if(cljs.core.truth_(inst_21251)){
var statearr_21273_21292 = state_21267__$1;
(statearr_21273_21292[(1)] = (5));

} else {
var statearr_21274_21293 = state_21267__$1;
(statearr_21274_21293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (6))){
var inst_21250 = (state_21267[(8)]);
var inst_21247 = (state_21267[(7)]);
var inst_21254 = (state_21267[(9)]);
var inst_21254__$1 = f.call(null,inst_21247,inst_21250);
var inst_21255 = cljs.core.reduced_QMARK_.call(null,inst_21254__$1);
var state_21267__$1 = (function (){var statearr_21275 = state_21267;
(statearr_21275[(9)] = inst_21254__$1);

return statearr_21275;
})();
if(inst_21255){
var statearr_21276_21294 = state_21267__$1;
(statearr_21276_21294[(1)] = (8));

} else {
var statearr_21277_21295 = state_21267__$1;
(statearr_21277_21295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (3))){
var inst_21265 = (state_21267[(2)]);
var state_21267__$1 = state_21267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21267__$1,inst_21265);
} else {
if((state_val_21268 === (2))){
var state_21267__$1 = state_21267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21267__$1,(4),ch);
} else {
if((state_val_21268 === (9))){
var inst_21254 = (state_21267[(9)]);
var inst_21247 = inst_21254;
var state_21267__$1 = (function (){var statearr_21278 = state_21267;
(statearr_21278[(7)] = inst_21247);

return statearr_21278;
})();
var statearr_21279_21296 = state_21267__$1;
(statearr_21279_21296[(2)] = null);

(statearr_21279_21296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (5))){
var inst_21247 = (state_21267[(7)]);
var state_21267__$1 = state_21267;
var statearr_21280_21297 = state_21267__$1;
(statearr_21280_21297[(2)] = inst_21247);

(statearr_21280_21297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (10))){
var inst_21261 = (state_21267[(2)]);
var state_21267__$1 = state_21267;
var statearr_21281_21298 = state_21267__$1;
(statearr_21281_21298[(2)] = inst_21261);

(statearr_21281_21298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (8))){
var inst_21254 = (state_21267[(9)]);
var inst_21257 = cljs.core.deref.call(null,inst_21254);
var state_21267__$1 = state_21267;
var statearr_21282_21299 = state_21267__$1;
(statearr_21282_21299[(2)] = inst_21257);

(statearr_21282_21299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto__))
;
return ((function (switch__20397__auto__,c__20509__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20398__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20398__auto____0 = (function (){
var statearr_21286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21286[(0)] = cljs$core$async$reduce_$_state_machine__20398__auto__);

(statearr_21286[(1)] = (1));

return statearr_21286;
});
var cljs$core$async$reduce_$_state_machine__20398__auto____1 = (function (state_21267){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_21267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e21287){if((e21287 instanceof Object)){
var ex__20401__auto__ = e21287;
var statearr_21288_21300 = state_21267;
(statearr_21288_21300[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21301 = state_21267;
state_21267 = G__21301;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20398__auto__ = function(state_21267){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20398__auto____1.call(this,state_21267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20398__auto____0;
cljs$core$async$reduce_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20398__auto____1;
return cljs$core$async$reduce_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__))
})();
var state__20511__auto__ = (function (){var statearr_21289 = f__20510__auto__.call(null);
(statearr_21289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_21289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__))
);

return c__20509__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21302 = [];
var len__19414__auto___21354 = arguments.length;
var i__19415__auto___21355 = (0);
while(true){
if((i__19415__auto___21355 < len__19414__auto___21354)){
args21302.push((arguments[i__19415__auto___21355]));

var G__21356 = (i__19415__auto___21355 + (1));
i__19415__auto___21355 = G__21356;
continue;
} else {
}
break;
}

var G__21304 = args21302.length;
switch (G__21304) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21302.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__){
return (function (state_21329){
var state_val_21330 = (state_21329[(1)]);
if((state_val_21330 === (7))){
var inst_21311 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21331_21358 = state_21329__$1;
(statearr_21331_21358[(2)] = inst_21311);

(statearr_21331_21358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (1))){
var inst_21305 = cljs.core.seq.call(null,coll);
var inst_21306 = inst_21305;
var state_21329__$1 = (function (){var statearr_21332 = state_21329;
(statearr_21332[(7)] = inst_21306);

return statearr_21332;
})();
var statearr_21333_21359 = state_21329__$1;
(statearr_21333_21359[(2)] = null);

(statearr_21333_21359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (4))){
var inst_21306 = (state_21329[(7)]);
var inst_21309 = cljs.core.first.call(null,inst_21306);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21329__$1,(7),ch,inst_21309);
} else {
if((state_val_21330 === (13))){
var inst_21323 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21334_21360 = state_21329__$1;
(statearr_21334_21360[(2)] = inst_21323);

(statearr_21334_21360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (6))){
var inst_21314 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
if(cljs.core.truth_(inst_21314)){
var statearr_21335_21361 = state_21329__$1;
(statearr_21335_21361[(1)] = (8));

} else {
var statearr_21336_21362 = state_21329__$1;
(statearr_21336_21362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (3))){
var inst_21327 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21329__$1,inst_21327);
} else {
if((state_val_21330 === (12))){
var state_21329__$1 = state_21329;
var statearr_21337_21363 = state_21329__$1;
(statearr_21337_21363[(2)] = null);

(statearr_21337_21363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (2))){
var inst_21306 = (state_21329[(7)]);
var state_21329__$1 = state_21329;
if(cljs.core.truth_(inst_21306)){
var statearr_21338_21364 = state_21329__$1;
(statearr_21338_21364[(1)] = (4));

} else {
var statearr_21339_21365 = state_21329__$1;
(statearr_21339_21365[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (11))){
var inst_21320 = cljs.core.async.close_BANG_.call(null,ch);
var state_21329__$1 = state_21329;
var statearr_21340_21366 = state_21329__$1;
(statearr_21340_21366[(2)] = inst_21320);

(statearr_21340_21366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (9))){
var state_21329__$1 = state_21329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21341_21367 = state_21329__$1;
(statearr_21341_21367[(1)] = (11));

} else {
var statearr_21342_21368 = state_21329__$1;
(statearr_21342_21368[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (5))){
var inst_21306 = (state_21329[(7)]);
var state_21329__$1 = state_21329;
var statearr_21343_21369 = state_21329__$1;
(statearr_21343_21369[(2)] = inst_21306);

(statearr_21343_21369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (10))){
var inst_21325 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21344_21370 = state_21329__$1;
(statearr_21344_21370[(2)] = inst_21325);

(statearr_21344_21370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (8))){
var inst_21306 = (state_21329[(7)]);
var inst_21316 = cljs.core.next.call(null,inst_21306);
var inst_21306__$1 = inst_21316;
var state_21329__$1 = (function (){var statearr_21345 = state_21329;
(statearr_21345[(7)] = inst_21306__$1);

return statearr_21345;
})();
var statearr_21346_21371 = state_21329__$1;
(statearr_21346_21371[(2)] = null);

(statearr_21346_21371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto__))
;
return ((function (switch__20397__auto__,c__20509__auto__){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_21350 = [null,null,null,null,null,null,null,null];
(statearr_21350[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_21350[(1)] = (1));

return statearr_21350;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_21329){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_21329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e21351){if((e21351 instanceof Object)){
var ex__20401__auto__ = e21351;
var statearr_21352_21372 = state_21329;
(statearr_21352_21372[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21373 = state_21329;
state_21329 = G__21373;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_21329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_21329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__))
})();
var state__20511__auto__ = (function (){var statearr_21353 = f__20510__auto__.call(null);
(statearr_21353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_21353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__))
);

return c__20509__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19011__auto__ = (((_ == null))?null:_);
var m__19012__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,_);
} else {
var m__19012__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19012__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m,ch);
} else {
var m__19012__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m);
} else {
var m__19012__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21595 = (function (mult,ch,cs,meta21596){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21596 = meta21596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21597,meta21596__$1){
var self__ = this;
var _21597__$1 = this;
return (new cljs.core.async.t_cljs$core$async21595(self__.mult,self__.ch,self__.cs,meta21596__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21597){
var self__ = this;
var _21597__$1 = this;
return self__.meta21596;
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21596","meta21596",723884092,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21595";

cljs.core.async.t_cljs$core$async21595.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async21595");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21595 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21595(mult__$1,ch__$1,cs__$1,meta21596){
return (new cljs.core.async.t_cljs$core$async21595(mult__$1,ch__$1,cs__$1,meta21596));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21595(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20509__auto___21816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___21816,cs,m,dchan,dctr,done){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___21816,cs,m,dchan,dctr,done){
return (function (state_21728){
var state_val_21729 = (state_21728[(1)]);
if((state_val_21729 === (7))){
var inst_21724 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21730_21817 = state_21728__$1;
(statearr_21730_21817[(2)] = inst_21724);

(statearr_21730_21817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (20))){
var inst_21629 = (state_21728[(7)]);
var inst_21639 = cljs.core.first.call(null,inst_21629);
var inst_21640 = cljs.core.nth.call(null,inst_21639,(0),null);
var inst_21641 = cljs.core.nth.call(null,inst_21639,(1),null);
var state_21728__$1 = (function (){var statearr_21731 = state_21728;
(statearr_21731[(8)] = inst_21640);

return statearr_21731;
})();
if(cljs.core.truth_(inst_21641)){
var statearr_21732_21818 = state_21728__$1;
(statearr_21732_21818[(1)] = (22));

} else {
var statearr_21733_21819 = state_21728__$1;
(statearr_21733_21819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (27))){
var inst_21676 = (state_21728[(9)]);
var inst_21600 = (state_21728[(10)]);
var inst_21669 = (state_21728[(11)]);
var inst_21671 = (state_21728[(12)]);
var inst_21676__$1 = cljs.core._nth.call(null,inst_21669,inst_21671);
var inst_21677 = cljs.core.async.put_BANG_.call(null,inst_21676__$1,inst_21600,done);
var state_21728__$1 = (function (){var statearr_21734 = state_21728;
(statearr_21734[(9)] = inst_21676__$1);

return statearr_21734;
})();
if(cljs.core.truth_(inst_21677)){
var statearr_21735_21820 = state_21728__$1;
(statearr_21735_21820[(1)] = (30));

} else {
var statearr_21736_21821 = state_21728__$1;
(statearr_21736_21821[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (1))){
var state_21728__$1 = state_21728;
var statearr_21737_21822 = state_21728__$1;
(statearr_21737_21822[(2)] = null);

(statearr_21737_21822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (24))){
var inst_21629 = (state_21728[(7)]);
var inst_21646 = (state_21728[(2)]);
var inst_21647 = cljs.core.next.call(null,inst_21629);
var inst_21609 = inst_21647;
var inst_21610 = null;
var inst_21611 = (0);
var inst_21612 = (0);
var state_21728__$1 = (function (){var statearr_21738 = state_21728;
(statearr_21738[(13)] = inst_21612);

(statearr_21738[(14)] = inst_21646);

(statearr_21738[(15)] = inst_21609);

(statearr_21738[(16)] = inst_21611);

(statearr_21738[(17)] = inst_21610);

return statearr_21738;
})();
var statearr_21739_21823 = state_21728__$1;
(statearr_21739_21823[(2)] = null);

(statearr_21739_21823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (39))){
var state_21728__$1 = state_21728;
var statearr_21743_21824 = state_21728__$1;
(statearr_21743_21824[(2)] = null);

(statearr_21743_21824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (4))){
var inst_21600 = (state_21728[(10)]);
var inst_21600__$1 = (state_21728[(2)]);
var inst_21601 = (inst_21600__$1 == null);
var state_21728__$1 = (function (){var statearr_21744 = state_21728;
(statearr_21744[(10)] = inst_21600__$1);

return statearr_21744;
})();
if(cljs.core.truth_(inst_21601)){
var statearr_21745_21825 = state_21728__$1;
(statearr_21745_21825[(1)] = (5));

} else {
var statearr_21746_21826 = state_21728__$1;
(statearr_21746_21826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (15))){
var inst_21612 = (state_21728[(13)]);
var inst_21609 = (state_21728[(15)]);
var inst_21611 = (state_21728[(16)]);
var inst_21610 = (state_21728[(17)]);
var inst_21625 = (state_21728[(2)]);
var inst_21626 = (inst_21612 + (1));
var tmp21740 = inst_21609;
var tmp21741 = inst_21611;
var tmp21742 = inst_21610;
var inst_21609__$1 = tmp21740;
var inst_21610__$1 = tmp21742;
var inst_21611__$1 = tmp21741;
var inst_21612__$1 = inst_21626;
var state_21728__$1 = (function (){var statearr_21747 = state_21728;
(statearr_21747[(13)] = inst_21612__$1);

(statearr_21747[(15)] = inst_21609__$1);

(statearr_21747[(18)] = inst_21625);

(statearr_21747[(16)] = inst_21611__$1);

(statearr_21747[(17)] = inst_21610__$1);

return statearr_21747;
})();
var statearr_21748_21827 = state_21728__$1;
(statearr_21748_21827[(2)] = null);

(statearr_21748_21827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (21))){
var inst_21650 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21752_21828 = state_21728__$1;
(statearr_21752_21828[(2)] = inst_21650);

(statearr_21752_21828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (31))){
var inst_21676 = (state_21728[(9)]);
var inst_21680 = done.call(null,null);
var inst_21681 = cljs.core.async.untap_STAR_.call(null,m,inst_21676);
var state_21728__$1 = (function (){var statearr_21753 = state_21728;
(statearr_21753[(19)] = inst_21680);

return statearr_21753;
})();
var statearr_21754_21829 = state_21728__$1;
(statearr_21754_21829[(2)] = inst_21681);

(statearr_21754_21829[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (32))){
var inst_21670 = (state_21728[(20)]);
var inst_21669 = (state_21728[(11)]);
var inst_21668 = (state_21728[(21)]);
var inst_21671 = (state_21728[(12)]);
var inst_21683 = (state_21728[(2)]);
var inst_21684 = (inst_21671 + (1));
var tmp21749 = inst_21670;
var tmp21750 = inst_21669;
var tmp21751 = inst_21668;
var inst_21668__$1 = tmp21751;
var inst_21669__$1 = tmp21750;
var inst_21670__$1 = tmp21749;
var inst_21671__$1 = inst_21684;
var state_21728__$1 = (function (){var statearr_21755 = state_21728;
(statearr_21755[(20)] = inst_21670__$1);

(statearr_21755[(22)] = inst_21683);

(statearr_21755[(11)] = inst_21669__$1);

(statearr_21755[(21)] = inst_21668__$1);

(statearr_21755[(12)] = inst_21671__$1);

return statearr_21755;
})();
var statearr_21756_21830 = state_21728__$1;
(statearr_21756_21830[(2)] = null);

(statearr_21756_21830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (40))){
var inst_21696 = (state_21728[(23)]);
var inst_21700 = done.call(null,null);
var inst_21701 = cljs.core.async.untap_STAR_.call(null,m,inst_21696);
var state_21728__$1 = (function (){var statearr_21757 = state_21728;
(statearr_21757[(24)] = inst_21700);

return statearr_21757;
})();
var statearr_21758_21831 = state_21728__$1;
(statearr_21758_21831[(2)] = inst_21701);

(statearr_21758_21831[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (33))){
var inst_21687 = (state_21728[(25)]);
var inst_21689 = cljs.core.chunked_seq_QMARK_.call(null,inst_21687);
var state_21728__$1 = state_21728;
if(inst_21689){
var statearr_21759_21832 = state_21728__$1;
(statearr_21759_21832[(1)] = (36));

} else {
var statearr_21760_21833 = state_21728__$1;
(statearr_21760_21833[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (13))){
var inst_21619 = (state_21728[(26)]);
var inst_21622 = cljs.core.async.close_BANG_.call(null,inst_21619);
var state_21728__$1 = state_21728;
var statearr_21761_21834 = state_21728__$1;
(statearr_21761_21834[(2)] = inst_21622);

(statearr_21761_21834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (22))){
var inst_21640 = (state_21728[(8)]);
var inst_21643 = cljs.core.async.close_BANG_.call(null,inst_21640);
var state_21728__$1 = state_21728;
var statearr_21762_21835 = state_21728__$1;
(statearr_21762_21835[(2)] = inst_21643);

(statearr_21762_21835[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (36))){
var inst_21687 = (state_21728[(25)]);
var inst_21691 = cljs.core.chunk_first.call(null,inst_21687);
var inst_21692 = cljs.core.chunk_rest.call(null,inst_21687);
var inst_21693 = cljs.core.count.call(null,inst_21691);
var inst_21668 = inst_21692;
var inst_21669 = inst_21691;
var inst_21670 = inst_21693;
var inst_21671 = (0);
var state_21728__$1 = (function (){var statearr_21763 = state_21728;
(statearr_21763[(20)] = inst_21670);

(statearr_21763[(11)] = inst_21669);

(statearr_21763[(21)] = inst_21668);

(statearr_21763[(12)] = inst_21671);

return statearr_21763;
})();
var statearr_21764_21836 = state_21728__$1;
(statearr_21764_21836[(2)] = null);

(statearr_21764_21836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (41))){
var inst_21687 = (state_21728[(25)]);
var inst_21703 = (state_21728[(2)]);
var inst_21704 = cljs.core.next.call(null,inst_21687);
var inst_21668 = inst_21704;
var inst_21669 = null;
var inst_21670 = (0);
var inst_21671 = (0);
var state_21728__$1 = (function (){var statearr_21765 = state_21728;
(statearr_21765[(20)] = inst_21670);

(statearr_21765[(11)] = inst_21669);

(statearr_21765[(27)] = inst_21703);

(statearr_21765[(21)] = inst_21668);

(statearr_21765[(12)] = inst_21671);

return statearr_21765;
})();
var statearr_21766_21837 = state_21728__$1;
(statearr_21766_21837[(2)] = null);

(statearr_21766_21837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (43))){
var state_21728__$1 = state_21728;
var statearr_21767_21838 = state_21728__$1;
(statearr_21767_21838[(2)] = null);

(statearr_21767_21838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (29))){
var inst_21712 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21768_21839 = state_21728__$1;
(statearr_21768_21839[(2)] = inst_21712);

(statearr_21768_21839[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (44))){
var inst_21721 = (state_21728[(2)]);
var state_21728__$1 = (function (){var statearr_21769 = state_21728;
(statearr_21769[(28)] = inst_21721);

return statearr_21769;
})();
var statearr_21770_21840 = state_21728__$1;
(statearr_21770_21840[(2)] = null);

(statearr_21770_21840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (6))){
var inst_21660 = (state_21728[(29)]);
var inst_21659 = cljs.core.deref.call(null,cs);
var inst_21660__$1 = cljs.core.keys.call(null,inst_21659);
var inst_21661 = cljs.core.count.call(null,inst_21660__$1);
var inst_21662 = cljs.core.reset_BANG_.call(null,dctr,inst_21661);
var inst_21667 = cljs.core.seq.call(null,inst_21660__$1);
var inst_21668 = inst_21667;
var inst_21669 = null;
var inst_21670 = (0);
var inst_21671 = (0);
var state_21728__$1 = (function (){var statearr_21771 = state_21728;
(statearr_21771[(20)] = inst_21670);

(statearr_21771[(11)] = inst_21669);

(statearr_21771[(29)] = inst_21660__$1);

(statearr_21771[(30)] = inst_21662);

(statearr_21771[(21)] = inst_21668);

(statearr_21771[(12)] = inst_21671);

return statearr_21771;
})();
var statearr_21772_21841 = state_21728__$1;
(statearr_21772_21841[(2)] = null);

(statearr_21772_21841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (28))){
var inst_21687 = (state_21728[(25)]);
var inst_21668 = (state_21728[(21)]);
var inst_21687__$1 = cljs.core.seq.call(null,inst_21668);
var state_21728__$1 = (function (){var statearr_21773 = state_21728;
(statearr_21773[(25)] = inst_21687__$1);

return statearr_21773;
})();
if(inst_21687__$1){
var statearr_21774_21842 = state_21728__$1;
(statearr_21774_21842[(1)] = (33));

} else {
var statearr_21775_21843 = state_21728__$1;
(statearr_21775_21843[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (25))){
var inst_21670 = (state_21728[(20)]);
var inst_21671 = (state_21728[(12)]);
var inst_21673 = (inst_21671 < inst_21670);
var inst_21674 = inst_21673;
var state_21728__$1 = state_21728;
if(cljs.core.truth_(inst_21674)){
var statearr_21776_21844 = state_21728__$1;
(statearr_21776_21844[(1)] = (27));

} else {
var statearr_21777_21845 = state_21728__$1;
(statearr_21777_21845[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (34))){
var state_21728__$1 = state_21728;
var statearr_21778_21846 = state_21728__$1;
(statearr_21778_21846[(2)] = null);

(statearr_21778_21846[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (17))){
var state_21728__$1 = state_21728;
var statearr_21779_21847 = state_21728__$1;
(statearr_21779_21847[(2)] = null);

(statearr_21779_21847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (3))){
var inst_21726 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21728__$1,inst_21726);
} else {
if((state_val_21729 === (12))){
var inst_21655 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21780_21848 = state_21728__$1;
(statearr_21780_21848[(2)] = inst_21655);

(statearr_21780_21848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (2))){
var state_21728__$1 = state_21728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21728__$1,(4),ch);
} else {
if((state_val_21729 === (23))){
var state_21728__$1 = state_21728;
var statearr_21781_21849 = state_21728__$1;
(statearr_21781_21849[(2)] = null);

(statearr_21781_21849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (35))){
var inst_21710 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21782_21850 = state_21728__$1;
(statearr_21782_21850[(2)] = inst_21710);

(statearr_21782_21850[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (19))){
var inst_21629 = (state_21728[(7)]);
var inst_21633 = cljs.core.chunk_first.call(null,inst_21629);
var inst_21634 = cljs.core.chunk_rest.call(null,inst_21629);
var inst_21635 = cljs.core.count.call(null,inst_21633);
var inst_21609 = inst_21634;
var inst_21610 = inst_21633;
var inst_21611 = inst_21635;
var inst_21612 = (0);
var state_21728__$1 = (function (){var statearr_21783 = state_21728;
(statearr_21783[(13)] = inst_21612);

(statearr_21783[(15)] = inst_21609);

(statearr_21783[(16)] = inst_21611);

(statearr_21783[(17)] = inst_21610);

return statearr_21783;
})();
var statearr_21784_21851 = state_21728__$1;
(statearr_21784_21851[(2)] = null);

(statearr_21784_21851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (11))){
var inst_21629 = (state_21728[(7)]);
var inst_21609 = (state_21728[(15)]);
var inst_21629__$1 = cljs.core.seq.call(null,inst_21609);
var state_21728__$1 = (function (){var statearr_21785 = state_21728;
(statearr_21785[(7)] = inst_21629__$1);

return statearr_21785;
})();
if(inst_21629__$1){
var statearr_21786_21852 = state_21728__$1;
(statearr_21786_21852[(1)] = (16));

} else {
var statearr_21787_21853 = state_21728__$1;
(statearr_21787_21853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (9))){
var inst_21657 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21788_21854 = state_21728__$1;
(statearr_21788_21854[(2)] = inst_21657);

(statearr_21788_21854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (5))){
var inst_21607 = cljs.core.deref.call(null,cs);
var inst_21608 = cljs.core.seq.call(null,inst_21607);
var inst_21609 = inst_21608;
var inst_21610 = null;
var inst_21611 = (0);
var inst_21612 = (0);
var state_21728__$1 = (function (){var statearr_21789 = state_21728;
(statearr_21789[(13)] = inst_21612);

(statearr_21789[(15)] = inst_21609);

(statearr_21789[(16)] = inst_21611);

(statearr_21789[(17)] = inst_21610);

return statearr_21789;
})();
var statearr_21790_21855 = state_21728__$1;
(statearr_21790_21855[(2)] = null);

(statearr_21790_21855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (14))){
var state_21728__$1 = state_21728;
var statearr_21791_21856 = state_21728__$1;
(statearr_21791_21856[(2)] = null);

(statearr_21791_21856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (45))){
var inst_21718 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21792_21857 = state_21728__$1;
(statearr_21792_21857[(2)] = inst_21718);

(statearr_21792_21857[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (26))){
var inst_21660 = (state_21728[(29)]);
var inst_21714 = (state_21728[(2)]);
var inst_21715 = cljs.core.seq.call(null,inst_21660);
var state_21728__$1 = (function (){var statearr_21793 = state_21728;
(statearr_21793[(31)] = inst_21714);

return statearr_21793;
})();
if(inst_21715){
var statearr_21794_21858 = state_21728__$1;
(statearr_21794_21858[(1)] = (42));

} else {
var statearr_21795_21859 = state_21728__$1;
(statearr_21795_21859[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (16))){
var inst_21629 = (state_21728[(7)]);
var inst_21631 = cljs.core.chunked_seq_QMARK_.call(null,inst_21629);
var state_21728__$1 = state_21728;
if(inst_21631){
var statearr_21796_21860 = state_21728__$1;
(statearr_21796_21860[(1)] = (19));

} else {
var statearr_21797_21861 = state_21728__$1;
(statearr_21797_21861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (38))){
var inst_21707 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21798_21862 = state_21728__$1;
(statearr_21798_21862[(2)] = inst_21707);

(statearr_21798_21862[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (30))){
var state_21728__$1 = state_21728;
var statearr_21799_21863 = state_21728__$1;
(statearr_21799_21863[(2)] = null);

(statearr_21799_21863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (10))){
var inst_21612 = (state_21728[(13)]);
var inst_21610 = (state_21728[(17)]);
var inst_21618 = cljs.core._nth.call(null,inst_21610,inst_21612);
var inst_21619 = cljs.core.nth.call(null,inst_21618,(0),null);
var inst_21620 = cljs.core.nth.call(null,inst_21618,(1),null);
var state_21728__$1 = (function (){var statearr_21800 = state_21728;
(statearr_21800[(26)] = inst_21619);

return statearr_21800;
})();
if(cljs.core.truth_(inst_21620)){
var statearr_21801_21864 = state_21728__$1;
(statearr_21801_21864[(1)] = (13));

} else {
var statearr_21802_21865 = state_21728__$1;
(statearr_21802_21865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (18))){
var inst_21653 = (state_21728[(2)]);
var state_21728__$1 = state_21728;
var statearr_21803_21866 = state_21728__$1;
(statearr_21803_21866[(2)] = inst_21653);

(statearr_21803_21866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (42))){
var state_21728__$1 = state_21728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21728__$1,(45),dchan);
} else {
if((state_val_21729 === (37))){
var inst_21687 = (state_21728[(25)]);
var inst_21600 = (state_21728[(10)]);
var inst_21696 = (state_21728[(23)]);
var inst_21696__$1 = cljs.core.first.call(null,inst_21687);
var inst_21697 = cljs.core.async.put_BANG_.call(null,inst_21696__$1,inst_21600,done);
var state_21728__$1 = (function (){var statearr_21804 = state_21728;
(statearr_21804[(23)] = inst_21696__$1);

return statearr_21804;
})();
if(cljs.core.truth_(inst_21697)){
var statearr_21805_21867 = state_21728__$1;
(statearr_21805_21867[(1)] = (39));

} else {
var statearr_21806_21868 = state_21728__$1;
(statearr_21806_21868[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21729 === (8))){
var inst_21612 = (state_21728[(13)]);
var inst_21611 = (state_21728[(16)]);
var inst_21614 = (inst_21612 < inst_21611);
var inst_21615 = inst_21614;
var state_21728__$1 = state_21728;
if(cljs.core.truth_(inst_21615)){
var statearr_21807_21869 = state_21728__$1;
(statearr_21807_21869[(1)] = (10));

} else {
var statearr_21808_21870 = state_21728__$1;
(statearr_21808_21870[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___21816,cs,m,dchan,dctr,done))
;
return ((function (switch__20397__auto__,c__20509__auto___21816,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20398__auto__ = null;
var cljs$core$async$mult_$_state_machine__20398__auto____0 = (function (){
var statearr_21812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21812[(0)] = cljs$core$async$mult_$_state_machine__20398__auto__);

(statearr_21812[(1)] = (1));

return statearr_21812;
});
var cljs$core$async$mult_$_state_machine__20398__auto____1 = (function (state_21728){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_21728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e21813){if((e21813 instanceof Object)){
var ex__20401__auto__ = e21813;
var statearr_21814_21871 = state_21728;
(statearr_21814_21871[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21872 = state_21728;
state_21728 = G__21872;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20398__auto__ = function(state_21728){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20398__auto____1.call(this,state_21728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20398__auto____0;
cljs$core$async$mult_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20398__auto____1;
return cljs$core$async$mult_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___21816,cs,m,dchan,dctr,done))
})();
var state__20511__auto__ = (function (){var statearr_21815 = f__20510__auto__.call(null);
(statearr_21815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___21816);

return statearr_21815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___21816,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21873 = [];
var len__19414__auto___21876 = arguments.length;
var i__19415__auto___21877 = (0);
while(true){
if((i__19415__auto___21877 < len__19414__auto___21876)){
args21873.push((arguments[i__19415__auto___21877]));

var G__21878 = (i__19415__auto___21877 + (1));
i__19415__auto___21877 = G__21878;
continue;
} else {
}
break;
}

var G__21875 = args21873.length;
switch (G__21875) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21873.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m,ch);
} else {
var m__19012__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m,ch);
} else {
var m__19012__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m);
} else {
var m__19012__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m,state_map);
} else {
var m__19012__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19011__auto__ = (((m == null))?null:m);
var m__19012__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,m,mode);
} else {
var m__19012__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19421__auto__ = [];
var len__19414__auto___21890 = arguments.length;
var i__19415__auto___21891 = (0);
while(true){
if((i__19415__auto___21891 < len__19414__auto___21890)){
args__19421__auto__.push((arguments[i__19415__auto___21891]));

var G__21892 = (i__19415__auto___21891 + (1));
i__19415__auto___21891 = G__21892;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((3) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19422__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21884){
var map__21885 = p__21884;
var map__21885__$1 = ((((!((map__21885 == null)))?((((map__21885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21885):map__21885);
var opts = map__21885__$1;
var statearr_21887_21893 = state;
(statearr_21887_21893[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21885,map__21885__$1,opts){
return (function (val){
var statearr_21888_21894 = state;
(statearr_21888_21894[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21885,map__21885__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21889_21895 = state;
(statearr_21889_21895[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21880){
var G__21881 = cljs.core.first.call(null,seq21880);
var seq21880__$1 = cljs.core.next.call(null,seq21880);
var G__21882 = cljs.core.first.call(null,seq21880__$1);
var seq21880__$2 = cljs.core.next.call(null,seq21880__$1);
var G__21883 = cljs.core.first.call(null,seq21880__$2);
var seq21880__$3 = cljs.core.next.call(null,seq21880__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21881,G__21882,G__21883,seq21880__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22059 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22060){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22060 = meta22060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22061,meta22060__$1){
var self__ = this;
var _22061__$1 = this;
return (new cljs.core.async.t_cljs$core$async22059(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22060__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22061){
var self__ = this;
var _22061__$1 = this;
return self__.meta22060;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22060","meta22060",1858662056,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22059";

cljs.core.async.t_cljs$core$async22059.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async22059");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22059 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22059(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22060){
return (new cljs.core.async.t_cljs$core$async22059(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22060));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22059(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20509__auto___22222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___22222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___22222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22159){
var state_val_22160 = (state_22159[(1)]);
if((state_val_22160 === (7))){
var inst_22077 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22161_22223 = state_22159__$1;
(statearr_22161_22223[(2)] = inst_22077);

(statearr_22161_22223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (20))){
var inst_22089 = (state_22159[(7)]);
var state_22159__$1 = state_22159;
var statearr_22162_22224 = state_22159__$1;
(statearr_22162_22224[(2)] = inst_22089);

(statearr_22162_22224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (27))){
var state_22159__$1 = state_22159;
var statearr_22163_22225 = state_22159__$1;
(statearr_22163_22225[(2)] = null);

(statearr_22163_22225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (1))){
var inst_22065 = (state_22159[(8)]);
var inst_22065__$1 = calc_state.call(null);
var inst_22067 = (inst_22065__$1 == null);
var inst_22068 = cljs.core.not.call(null,inst_22067);
var state_22159__$1 = (function (){var statearr_22164 = state_22159;
(statearr_22164[(8)] = inst_22065__$1);

return statearr_22164;
})();
if(inst_22068){
var statearr_22165_22226 = state_22159__$1;
(statearr_22165_22226[(1)] = (2));

} else {
var statearr_22166_22227 = state_22159__$1;
(statearr_22166_22227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (24))){
var inst_22112 = (state_22159[(9)]);
var inst_22119 = (state_22159[(10)]);
var inst_22133 = (state_22159[(11)]);
var inst_22133__$1 = inst_22112.call(null,inst_22119);
var state_22159__$1 = (function (){var statearr_22167 = state_22159;
(statearr_22167[(11)] = inst_22133__$1);

return statearr_22167;
})();
if(cljs.core.truth_(inst_22133__$1)){
var statearr_22168_22228 = state_22159__$1;
(statearr_22168_22228[(1)] = (29));

} else {
var statearr_22169_22229 = state_22159__$1;
(statearr_22169_22229[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (4))){
var inst_22080 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22080)){
var statearr_22170_22230 = state_22159__$1;
(statearr_22170_22230[(1)] = (8));

} else {
var statearr_22171_22231 = state_22159__$1;
(statearr_22171_22231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (15))){
var inst_22106 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22106)){
var statearr_22172_22232 = state_22159__$1;
(statearr_22172_22232[(1)] = (19));

} else {
var statearr_22173_22233 = state_22159__$1;
(statearr_22173_22233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (21))){
var inst_22111 = (state_22159[(12)]);
var inst_22111__$1 = (state_22159[(2)]);
var inst_22112 = cljs.core.get.call(null,inst_22111__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22113 = cljs.core.get.call(null,inst_22111__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22114 = cljs.core.get.call(null,inst_22111__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22159__$1 = (function (){var statearr_22174 = state_22159;
(statearr_22174[(9)] = inst_22112);

(statearr_22174[(12)] = inst_22111__$1);

(statearr_22174[(13)] = inst_22113);

return statearr_22174;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22159__$1,(22),inst_22114);
} else {
if((state_val_22160 === (31))){
var inst_22141 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22141)){
var statearr_22175_22234 = state_22159__$1;
(statearr_22175_22234[(1)] = (32));

} else {
var statearr_22176_22235 = state_22159__$1;
(statearr_22176_22235[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (32))){
var inst_22118 = (state_22159[(14)]);
var state_22159__$1 = state_22159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22159__$1,(35),out,inst_22118);
} else {
if((state_val_22160 === (33))){
var inst_22111 = (state_22159[(12)]);
var inst_22089 = inst_22111;
var state_22159__$1 = (function (){var statearr_22177 = state_22159;
(statearr_22177[(7)] = inst_22089);

return statearr_22177;
})();
var statearr_22178_22236 = state_22159__$1;
(statearr_22178_22236[(2)] = null);

(statearr_22178_22236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (13))){
var inst_22089 = (state_22159[(7)]);
var inst_22096 = inst_22089.cljs$lang$protocol_mask$partition0$;
var inst_22097 = (inst_22096 & (64));
var inst_22098 = inst_22089.cljs$core$ISeq$;
var inst_22099 = (inst_22097) || (inst_22098);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22099)){
var statearr_22179_22237 = state_22159__$1;
(statearr_22179_22237[(1)] = (16));

} else {
var statearr_22180_22238 = state_22159__$1;
(statearr_22180_22238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (22))){
var inst_22118 = (state_22159[(14)]);
var inst_22119 = (state_22159[(10)]);
var inst_22117 = (state_22159[(2)]);
var inst_22118__$1 = cljs.core.nth.call(null,inst_22117,(0),null);
var inst_22119__$1 = cljs.core.nth.call(null,inst_22117,(1),null);
var inst_22120 = (inst_22118__$1 == null);
var inst_22121 = cljs.core._EQ_.call(null,inst_22119__$1,change);
var inst_22122 = (inst_22120) || (inst_22121);
var state_22159__$1 = (function (){var statearr_22181 = state_22159;
(statearr_22181[(14)] = inst_22118__$1);

(statearr_22181[(10)] = inst_22119__$1);

return statearr_22181;
})();
if(cljs.core.truth_(inst_22122)){
var statearr_22182_22239 = state_22159__$1;
(statearr_22182_22239[(1)] = (23));

} else {
var statearr_22183_22240 = state_22159__$1;
(statearr_22183_22240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (36))){
var inst_22111 = (state_22159[(12)]);
var inst_22089 = inst_22111;
var state_22159__$1 = (function (){var statearr_22184 = state_22159;
(statearr_22184[(7)] = inst_22089);

return statearr_22184;
})();
var statearr_22185_22241 = state_22159__$1;
(statearr_22185_22241[(2)] = null);

(statearr_22185_22241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (29))){
var inst_22133 = (state_22159[(11)]);
var state_22159__$1 = state_22159;
var statearr_22186_22242 = state_22159__$1;
(statearr_22186_22242[(2)] = inst_22133);

(statearr_22186_22242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (6))){
var state_22159__$1 = state_22159;
var statearr_22187_22243 = state_22159__$1;
(statearr_22187_22243[(2)] = false);

(statearr_22187_22243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (28))){
var inst_22129 = (state_22159[(2)]);
var inst_22130 = calc_state.call(null);
var inst_22089 = inst_22130;
var state_22159__$1 = (function (){var statearr_22188 = state_22159;
(statearr_22188[(7)] = inst_22089);

(statearr_22188[(15)] = inst_22129);

return statearr_22188;
})();
var statearr_22189_22244 = state_22159__$1;
(statearr_22189_22244[(2)] = null);

(statearr_22189_22244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (25))){
var inst_22155 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22190_22245 = state_22159__$1;
(statearr_22190_22245[(2)] = inst_22155);

(statearr_22190_22245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (34))){
var inst_22153 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22191_22246 = state_22159__$1;
(statearr_22191_22246[(2)] = inst_22153);

(statearr_22191_22246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (17))){
var state_22159__$1 = state_22159;
var statearr_22192_22247 = state_22159__$1;
(statearr_22192_22247[(2)] = false);

(statearr_22192_22247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (3))){
var state_22159__$1 = state_22159;
var statearr_22193_22248 = state_22159__$1;
(statearr_22193_22248[(2)] = false);

(statearr_22193_22248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (12))){
var inst_22157 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22159__$1,inst_22157);
} else {
if((state_val_22160 === (2))){
var inst_22065 = (state_22159[(8)]);
var inst_22070 = inst_22065.cljs$lang$protocol_mask$partition0$;
var inst_22071 = (inst_22070 & (64));
var inst_22072 = inst_22065.cljs$core$ISeq$;
var inst_22073 = (inst_22071) || (inst_22072);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22073)){
var statearr_22194_22249 = state_22159__$1;
(statearr_22194_22249[(1)] = (5));

} else {
var statearr_22195_22250 = state_22159__$1;
(statearr_22195_22250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (23))){
var inst_22118 = (state_22159[(14)]);
var inst_22124 = (inst_22118 == null);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22124)){
var statearr_22196_22251 = state_22159__$1;
(statearr_22196_22251[(1)] = (26));

} else {
var statearr_22197_22252 = state_22159__$1;
(statearr_22197_22252[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (35))){
var inst_22144 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22144)){
var statearr_22198_22253 = state_22159__$1;
(statearr_22198_22253[(1)] = (36));

} else {
var statearr_22199_22254 = state_22159__$1;
(statearr_22199_22254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (19))){
var inst_22089 = (state_22159[(7)]);
var inst_22108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22089);
var state_22159__$1 = state_22159;
var statearr_22200_22255 = state_22159__$1;
(statearr_22200_22255[(2)] = inst_22108);

(statearr_22200_22255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (11))){
var inst_22089 = (state_22159[(7)]);
var inst_22093 = (inst_22089 == null);
var inst_22094 = cljs.core.not.call(null,inst_22093);
var state_22159__$1 = state_22159;
if(inst_22094){
var statearr_22201_22256 = state_22159__$1;
(statearr_22201_22256[(1)] = (13));

} else {
var statearr_22202_22257 = state_22159__$1;
(statearr_22202_22257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (9))){
var inst_22065 = (state_22159[(8)]);
var state_22159__$1 = state_22159;
var statearr_22203_22258 = state_22159__$1;
(statearr_22203_22258[(2)] = inst_22065);

(statearr_22203_22258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (5))){
var state_22159__$1 = state_22159;
var statearr_22204_22259 = state_22159__$1;
(statearr_22204_22259[(2)] = true);

(statearr_22204_22259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (14))){
var state_22159__$1 = state_22159;
var statearr_22205_22260 = state_22159__$1;
(statearr_22205_22260[(2)] = false);

(statearr_22205_22260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (26))){
var inst_22119 = (state_22159[(10)]);
var inst_22126 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22119);
var state_22159__$1 = state_22159;
var statearr_22206_22261 = state_22159__$1;
(statearr_22206_22261[(2)] = inst_22126);

(statearr_22206_22261[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (16))){
var state_22159__$1 = state_22159;
var statearr_22207_22262 = state_22159__$1;
(statearr_22207_22262[(2)] = true);

(statearr_22207_22262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (38))){
var inst_22149 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22208_22263 = state_22159__$1;
(statearr_22208_22263[(2)] = inst_22149);

(statearr_22208_22263[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (30))){
var inst_22112 = (state_22159[(9)]);
var inst_22119 = (state_22159[(10)]);
var inst_22113 = (state_22159[(13)]);
var inst_22136 = cljs.core.empty_QMARK_.call(null,inst_22112);
var inst_22137 = inst_22113.call(null,inst_22119);
var inst_22138 = cljs.core.not.call(null,inst_22137);
var inst_22139 = (inst_22136) && (inst_22138);
var state_22159__$1 = state_22159;
var statearr_22209_22264 = state_22159__$1;
(statearr_22209_22264[(2)] = inst_22139);

(statearr_22209_22264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (10))){
var inst_22065 = (state_22159[(8)]);
var inst_22085 = (state_22159[(2)]);
var inst_22086 = cljs.core.get.call(null,inst_22085,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22087 = cljs.core.get.call(null,inst_22085,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22088 = cljs.core.get.call(null,inst_22085,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22089 = inst_22065;
var state_22159__$1 = (function (){var statearr_22210 = state_22159;
(statearr_22210[(7)] = inst_22089);

(statearr_22210[(16)] = inst_22086);

(statearr_22210[(17)] = inst_22088);

(statearr_22210[(18)] = inst_22087);

return statearr_22210;
})();
var statearr_22211_22265 = state_22159__$1;
(statearr_22211_22265[(2)] = null);

(statearr_22211_22265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (18))){
var inst_22103 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22212_22266 = state_22159__$1;
(statearr_22212_22266[(2)] = inst_22103);

(statearr_22212_22266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (37))){
var state_22159__$1 = state_22159;
var statearr_22213_22267 = state_22159__$1;
(statearr_22213_22267[(2)] = null);

(statearr_22213_22267[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (8))){
var inst_22065 = (state_22159[(8)]);
var inst_22082 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22065);
var state_22159__$1 = state_22159;
var statearr_22214_22268 = state_22159__$1;
(statearr_22214_22268[(2)] = inst_22082);

(statearr_22214_22268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___22222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20397__auto__,c__20509__auto___22222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20398__auto__ = null;
var cljs$core$async$mix_$_state_machine__20398__auto____0 = (function (){
var statearr_22218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22218[(0)] = cljs$core$async$mix_$_state_machine__20398__auto__);

(statearr_22218[(1)] = (1));

return statearr_22218;
});
var cljs$core$async$mix_$_state_machine__20398__auto____1 = (function (state_22159){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22219){if((e22219 instanceof Object)){
var ex__20401__auto__ = e22219;
var statearr_22220_22269 = state_22159;
(statearr_22220_22269[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22270 = state_22159;
state_22159 = G__22270;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20398__auto__ = function(state_22159){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20398__auto____1.call(this,state_22159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20398__auto____0;
cljs$core$async$mix_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20398__auto____1;
return cljs$core$async$mix_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___22222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20511__auto__ = (function (){var statearr_22221 = f__20510__auto__.call(null);
(statearr_22221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___22222);

return statearr_22221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___22222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19011__auto__ = (((p == null))?null:p);
var m__19012__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19012__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19011__auto__ = (((p == null))?null:p);
var m__19012__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,p,v,ch);
} else {
var m__19012__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22271 = [];
var len__19414__auto___22274 = arguments.length;
var i__19415__auto___22275 = (0);
while(true){
if((i__19415__auto___22275 < len__19414__auto___22274)){
args22271.push((arguments[i__19415__auto___22275]));

var G__22276 = (i__19415__auto___22275 + (1));
i__19415__auto___22275 = G__22276;
continue;
} else {
}
break;
}

var G__22273 = args22271.length;
switch (G__22273) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22271.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19011__auto__ = (((p == null))?null:p);
var m__19012__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,p);
} else {
var m__19012__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19011__auto__ = (((p == null))?null:p);
var m__19012__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19011__auto__)]);
if(!((m__19012__auto__ == null))){
return m__19012__auto__.call(null,p,v);
} else {
var m__19012__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19012__auto____$1 == null))){
return m__19012__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22279 = [];
var len__19414__auto___22404 = arguments.length;
var i__19415__auto___22405 = (0);
while(true){
if((i__19415__auto___22405 < len__19414__auto___22404)){
args22279.push((arguments[i__19415__auto___22405]));

var G__22406 = (i__19415__auto___22405 + (1));
i__19415__auto___22405 = G__22406;
continue;
} else {
}
break;
}

var G__22281 = args22279.length;
switch (G__22281) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22279.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18356__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18356__auto__,mults){
return (function (p1__22278_SHARP_){
if(cljs.core.truth_(p1__22278_SHARP_.call(null,topic))){
return p1__22278_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22278_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18356__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22282 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22283){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22283 = meta22283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22284,meta22283__$1){
var self__ = this;
var _22284__$1 = this;
return (new cljs.core.async.t_cljs$core$async22282(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22283__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22284){
var self__ = this;
var _22284__$1 = this;
return self__.meta22283;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22283","meta22283",1530133364,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22282";

cljs.core.async.t_cljs$core$async22282.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async22282");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22282 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22282(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22283){
return (new cljs.core.async.t_cljs$core$async22282(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22283));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22282(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20509__auto___22408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___22408,mults,ensure_mult,p){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___22408,mults,ensure_mult,p){
return (function (state_22356){
var state_val_22357 = (state_22356[(1)]);
if((state_val_22357 === (7))){
var inst_22352 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22358_22409 = state_22356__$1;
(statearr_22358_22409[(2)] = inst_22352);

(statearr_22358_22409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (20))){
var state_22356__$1 = state_22356;
var statearr_22359_22410 = state_22356__$1;
(statearr_22359_22410[(2)] = null);

(statearr_22359_22410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (1))){
var state_22356__$1 = state_22356;
var statearr_22360_22411 = state_22356__$1;
(statearr_22360_22411[(2)] = null);

(statearr_22360_22411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (24))){
var inst_22335 = (state_22356[(7)]);
var inst_22344 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22335);
var state_22356__$1 = state_22356;
var statearr_22361_22412 = state_22356__$1;
(statearr_22361_22412[(2)] = inst_22344);

(statearr_22361_22412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (4))){
var inst_22287 = (state_22356[(8)]);
var inst_22287__$1 = (state_22356[(2)]);
var inst_22288 = (inst_22287__$1 == null);
var state_22356__$1 = (function (){var statearr_22362 = state_22356;
(statearr_22362[(8)] = inst_22287__$1);

return statearr_22362;
})();
if(cljs.core.truth_(inst_22288)){
var statearr_22363_22413 = state_22356__$1;
(statearr_22363_22413[(1)] = (5));

} else {
var statearr_22364_22414 = state_22356__$1;
(statearr_22364_22414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (15))){
var inst_22329 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22365_22415 = state_22356__$1;
(statearr_22365_22415[(2)] = inst_22329);

(statearr_22365_22415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (21))){
var inst_22349 = (state_22356[(2)]);
var state_22356__$1 = (function (){var statearr_22366 = state_22356;
(statearr_22366[(9)] = inst_22349);

return statearr_22366;
})();
var statearr_22367_22416 = state_22356__$1;
(statearr_22367_22416[(2)] = null);

(statearr_22367_22416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (13))){
var inst_22311 = (state_22356[(10)]);
var inst_22313 = cljs.core.chunked_seq_QMARK_.call(null,inst_22311);
var state_22356__$1 = state_22356;
if(inst_22313){
var statearr_22368_22417 = state_22356__$1;
(statearr_22368_22417[(1)] = (16));

} else {
var statearr_22369_22418 = state_22356__$1;
(statearr_22369_22418[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (22))){
var inst_22341 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
if(cljs.core.truth_(inst_22341)){
var statearr_22370_22419 = state_22356__$1;
(statearr_22370_22419[(1)] = (23));

} else {
var statearr_22371_22420 = state_22356__$1;
(statearr_22371_22420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (6))){
var inst_22335 = (state_22356[(7)]);
var inst_22287 = (state_22356[(8)]);
var inst_22337 = (state_22356[(11)]);
var inst_22335__$1 = topic_fn.call(null,inst_22287);
var inst_22336 = cljs.core.deref.call(null,mults);
var inst_22337__$1 = cljs.core.get.call(null,inst_22336,inst_22335__$1);
var state_22356__$1 = (function (){var statearr_22372 = state_22356;
(statearr_22372[(7)] = inst_22335__$1);

(statearr_22372[(11)] = inst_22337__$1);

return statearr_22372;
})();
if(cljs.core.truth_(inst_22337__$1)){
var statearr_22373_22421 = state_22356__$1;
(statearr_22373_22421[(1)] = (19));

} else {
var statearr_22374_22422 = state_22356__$1;
(statearr_22374_22422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (25))){
var inst_22346 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22375_22423 = state_22356__$1;
(statearr_22375_22423[(2)] = inst_22346);

(statearr_22375_22423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (17))){
var inst_22311 = (state_22356[(10)]);
var inst_22320 = cljs.core.first.call(null,inst_22311);
var inst_22321 = cljs.core.async.muxch_STAR_.call(null,inst_22320);
var inst_22322 = cljs.core.async.close_BANG_.call(null,inst_22321);
var inst_22323 = cljs.core.next.call(null,inst_22311);
var inst_22297 = inst_22323;
var inst_22298 = null;
var inst_22299 = (0);
var inst_22300 = (0);
var state_22356__$1 = (function (){var statearr_22376 = state_22356;
(statearr_22376[(12)] = inst_22322);

(statearr_22376[(13)] = inst_22300);

(statearr_22376[(14)] = inst_22297);

(statearr_22376[(15)] = inst_22299);

(statearr_22376[(16)] = inst_22298);

return statearr_22376;
})();
var statearr_22377_22424 = state_22356__$1;
(statearr_22377_22424[(2)] = null);

(statearr_22377_22424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (3))){
var inst_22354 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22356__$1,inst_22354);
} else {
if((state_val_22357 === (12))){
var inst_22331 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22378_22425 = state_22356__$1;
(statearr_22378_22425[(2)] = inst_22331);

(statearr_22378_22425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (2))){
var state_22356__$1 = state_22356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22356__$1,(4),ch);
} else {
if((state_val_22357 === (23))){
var state_22356__$1 = state_22356;
var statearr_22379_22426 = state_22356__$1;
(statearr_22379_22426[(2)] = null);

(statearr_22379_22426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (19))){
var inst_22287 = (state_22356[(8)]);
var inst_22337 = (state_22356[(11)]);
var inst_22339 = cljs.core.async.muxch_STAR_.call(null,inst_22337);
var state_22356__$1 = state_22356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22356__$1,(22),inst_22339,inst_22287);
} else {
if((state_val_22357 === (11))){
var inst_22311 = (state_22356[(10)]);
var inst_22297 = (state_22356[(14)]);
var inst_22311__$1 = cljs.core.seq.call(null,inst_22297);
var state_22356__$1 = (function (){var statearr_22380 = state_22356;
(statearr_22380[(10)] = inst_22311__$1);

return statearr_22380;
})();
if(inst_22311__$1){
var statearr_22381_22427 = state_22356__$1;
(statearr_22381_22427[(1)] = (13));

} else {
var statearr_22382_22428 = state_22356__$1;
(statearr_22382_22428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (9))){
var inst_22333 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22383_22429 = state_22356__$1;
(statearr_22383_22429[(2)] = inst_22333);

(statearr_22383_22429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (5))){
var inst_22294 = cljs.core.deref.call(null,mults);
var inst_22295 = cljs.core.vals.call(null,inst_22294);
var inst_22296 = cljs.core.seq.call(null,inst_22295);
var inst_22297 = inst_22296;
var inst_22298 = null;
var inst_22299 = (0);
var inst_22300 = (0);
var state_22356__$1 = (function (){var statearr_22384 = state_22356;
(statearr_22384[(13)] = inst_22300);

(statearr_22384[(14)] = inst_22297);

(statearr_22384[(15)] = inst_22299);

(statearr_22384[(16)] = inst_22298);

return statearr_22384;
})();
var statearr_22385_22430 = state_22356__$1;
(statearr_22385_22430[(2)] = null);

(statearr_22385_22430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (14))){
var state_22356__$1 = state_22356;
var statearr_22389_22431 = state_22356__$1;
(statearr_22389_22431[(2)] = null);

(statearr_22389_22431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (16))){
var inst_22311 = (state_22356[(10)]);
var inst_22315 = cljs.core.chunk_first.call(null,inst_22311);
var inst_22316 = cljs.core.chunk_rest.call(null,inst_22311);
var inst_22317 = cljs.core.count.call(null,inst_22315);
var inst_22297 = inst_22316;
var inst_22298 = inst_22315;
var inst_22299 = inst_22317;
var inst_22300 = (0);
var state_22356__$1 = (function (){var statearr_22390 = state_22356;
(statearr_22390[(13)] = inst_22300);

(statearr_22390[(14)] = inst_22297);

(statearr_22390[(15)] = inst_22299);

(statearr_22390[(16)] = inst_22298);

return statearr_22390;
})();
var statearr_22391_22432 = state_22356__$1;
(statearr_22391_22432[(2)] = null);

(statearr_22391_22432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (10))){
var inst_22300 = (state_22356[(13)]);
var inst_22297 = (state_22356[(14)]);
var inst_22299 = (state_22356[(15)]);
var inst_22298 = (state_22356[(16)]);
var inst_22305 = cljs.core._nth.call(null,inst_22298,inst_22300);
var inst_22306 = cljs.core.async.muxch_STAR_.call(null,inst_22305);
var inst_22307 = cljs.core.async.close_BANG_.call(null,inst_22306);
var inst_22308 = (inst_22300 + (1));
var tmp22386 = inst_22297;
var tmp22387 = inst_22299;
var tmp22388 = inst_22298;
var inst_22297__$1 = tmp22386;
var inst_22298__$1 = tmp22388;
var inst_22299__$1 = tmp22387;
var inst_22300__$1 = inst_22308;
var state_22356__$1 = (function (){var statearr_22392 = state_22356;
(statearr_22392[(13)] = inst_22300__$1);

(statearr_22392[(14)] = inst_22297__$1);

(statearr_22392[(15)] = inst_22299__$1);

(statearr_22392[(16)] = inst_22298__$1);

(statearr_22392[(17)] = inst_22307);

return statearr_22392;
})();
var statearr_22393_22433 = state_22356__$1;
(statearr_22393_22433[(2)] = null);

(statearr_22393_22433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (18))){
var inst_22326 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22394_22434 = state_22356__$1;
(statearr_22394_22434[(2)] = inst_22326);

(statearr_22394_22434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (8))){
var inst_22300 = (state_22356[(13)]);
var inst_22299 = (state_22356[(15)]);
var inst_22302 = (inst_22300 < inst_22299);
var inst_22303 = inst_22302;
var state_22356__$1 = state_22356;
if(cljs.core.truth_(inst_22303)){
var statearr_22395_22435 = state_22356__$1;
(statearr_22395_22435[(1)] = (10));

} else {
var statearr_22396_22436 = state_22356__$1;
(statearr_22396_22436[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___22408,mults,ensure_mult,p))
;
return ((function (switch__20397__auto__,c__20509__auto___22408,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_22400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22400[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_22400[(1)] = (1));

return statearr_22400;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_22356){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22401){if((e22401 instanceof Object)){
var ex__20401__auto__ = e22401;
var statearr_22402_22437 = state_22356;
(statearr_22402_22437[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22438 = state_22356;
state_22356 = G__22438;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_22356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_22356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___22408,mults,ensure_mult,p))
})();
var state__20511__auto__ = (function (){var statearr_22403 = f__20510__auto__.call(null);
(statearr_22403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___22408);

return statearr_22403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___22408,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22439 = [];
var len__19414__auto___22442 = arguments.length;
var i__19415__auto___22443 = (0);
while(true){
if((i__19415__auto___22443 < len__19414__auto___22442)){
args22439.push((arguments[i__19415__auto___22443]));

var G__22444 = (i__19415__auto___22443 + (1));
i__19415__auto___22443 = G__22444;
continue;
} else {
}
break;
}

var G__22441 = args22439.length;
switch (G__22441) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22439.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22446 = [];
var len__19414__auto___22449 = arguments.length;
var i__19415__auto___22450 = (0);
while(true){
if((i__19415__auto___22450 < len__19414__auto___22449)){
args22446.push((arguments[i__19415__auto___22450]));

var G__22451 = (i__19415__auto___22450 + (1));
i__19415__auto___22450 = G__22451;
continue;
} else {
}
break;
}

var G__22448 = args22446.length;
switch (G__22448) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22446.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22453 = [];
var len__19414__auto___22524 = arguments.length;
var i__19415__auto___22525 = (0);
while(true){
if((i__19415__auto___22525 < len__19414__auto___22524)){
args22453.push((arguments[i__19415__auto___22525]));

var G__22526 = (i__19415__auto___22525 + (1));
i__19415__auto___22525 = G__22526;
continue;
} else {
}
break;
}

var G__22455 = args22453.length;
switch (G__22455) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22453.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20509__auto___22528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___22528,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___22528,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22494){
var state_val_22495 = (state_22494[(1)]);
if((state_val_22495 === (7))){
var state_22494__$1 = state_22494;
var statearr_22496_22529 = state_22494__$1;
(statearr_22496_22529[(2)] = null);

(statearr_22496_22529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (1))){
var state_22494__$1 = state_22494;
var statearr_22497_22530 = state_22494__$1;
(statearr_22497_22530[(2)] = null);

(statearr_22497_22530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (4))){
var inst_22458 = (state_22494[(7)]);
var inst_22460 = (inst_22458 < cnt);
var state_22494__$1 = state_22494;
if(cljs.core.truth_(inst_22460)){
var statearr_22498_22531 = state_22494__$1;
(statearr_22498_22531[(1)] = (6));

} else {
var statearr_22499_22532 = state_22494__$1;
(statearr_22499_22532[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (15))){
var inst_22490 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
var statearr_22500_22533 = state_22494__$1;
(statearr_22500_22533[(2)] = inst_22490);

(statearr_22500_22533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (13))){
var inst_22483 = cljs.core.async.close_BANG_.call(null,out);
var state_22494__$1 = state_22494;
var statearr_22501_22534 = state_22494__$1;
(statearr_22501_22534[(2)] = inst_22483);

(statearr_22501_22534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (6))){
var state_22494__$1 = state_22494;
var statearr_22502_22535 = state_22494__$1;
(statearr_22502_22535[(2)] = null);

(statearr_22502_22535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (3))){
var inst_22492 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22494__$1,inst_22492);
} else {
if((state_val_22495 === (12))){
var inst_22480 = (state_22494[(8)]);
var inst_22480__$1 = (state_22494[(2)]);
var inst_22481 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22480__$1);
var state_22494__$1 = (function (){var statearr_22503 = state_22494;
(statearr_22503[(8)] = inst_22480__$1);

return statearr_22503;
})();
if(cljs.core.truth_(inst_22481)){
var statearr_22504_22536 = state_22494__$1;
(statearr_22504_22536[(1)] = (13));

} else {
var statearr_22505_22537 = state_22494__$1;
(statearr_22505_22537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (2))){
var inst_22457 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22458 = (0);
var state_22494__$1 = (function (){var statearr_22506 = state_22494;
(statearr_22506[(9)] = inst_22457);

(statearr_22506[(7)] = inst_22458);

return statearr_22506;
})();
var statearr_22507_22538 = state_22494__$1;
(statearr_22507_22538[(2)] = null);

(statearr_22507_22538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (11))){
var inst_22458 = (state_22494[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22494,(10),Object,null,(9));
var inst_22467 = chs__$1.call(null,inst_22458);
var inst_22468 = done.call(null,inst_22458);
var inst_22469 = cljs.core.async.take_BANG_.call(null,inst_22467,inst_22468);
var state_22494__$1 = state_22494;
var statearr_22508_22539 = state_22494__$1;
(statearr_22508_22539[(2)] = inst_22469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (9))){
var inst_22458 = (state_22494[(7)]);
var inst_22471 = (state_22494[(2)]);
var inst_22472 = (inst_22458 + (1));
var inst_22458__$1 = inst_22472;
var state_22494__$1 = (function (){var statearr_22509 = state_22494;
(statearr_22509[(10)] = inst_22471);

(statearr_22509[(7)] = inst_22458__$1);

return statearr_22509;
})();
var statearr_22510_22540 = state_22494__$1;
(statearr_22510_22540[(2)] = null);

(statearr_22510_22540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (5))){
var inst_22478 = (state_22494[(2)]);
var state_22494__$1 = (function (){var statearr_22511 = state_22494;
(statearr_22511[(11)] = inst_22478);

return statearr_22511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22494__$1,(12),dchan);
} else {
if((state_val_22495 === (14))){
var inst_22480 = (state_22494[(8)]);
var inst_22485 = cljs.core.apply.call(null,f,inst_22480);
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22494__$1,(16),out,inst_22485);
} else {
if((state_val_22495 === (16))){
var inst_22487 = (state_22494[(2)]);
var state_22494__$1 = (function (){var statearr_22512 = state_22494;
(statearr_22512[(12)] = inst_22487);

return statearr_22512;
})();
var statearr_22513_22541 = state_22494__$1;
(statearr_22513_22541[(2)] = null);

(statearr_22513_22541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (10))){
var inst_22462 = (state_22494[(2)]);
var inst_22463 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22494__$1 = (function (){var statearr_22514 = state_22494;
(statearr_22514[(13)] = inst_22462);

return statearr_22514;
})();
var statearr_22515_22542 = state_22494__$1;
(statearr_22515_22542[(2)] = inst_22463);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22495 === (8))){
var inst_22476 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
var statearr_22516_22543 = state_22494__$1;
(statearr_22516_22543[(2)] = inst_22476);

(statearr_22516_22543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___22528,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20397__auto__,c__20509__auto___22528,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_22520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22520[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_22520[(1)] = (1));

return statearr_22520;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_22494){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22521){if((e22521 instanceof Object)){
var ex__20401__auto__ = e22521;
var statearr_22522_22544 = state_22494;
(statearr_22522_22544[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22545 = state_22494;
state_22494 = G__22545;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_22494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_22494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___22528,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20511__auto__ = (function (){var statearr_22523 = f__20510__auto__.call(null);
(statearr_22523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___22528);

return statearr_22523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___22528,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22547 = [];
var len__19414__auto___22603 = arguments.length;
var i__19415__auto___22604 = (0);
while(true){
if((i__19415__auto___22604 < len__19414__auto___22603)){
args22547.push((arguments[i__19415__auto___22604]));

var G__22605 = (i__19415__auto___22604 + (1));
i__19415__auto___22604 = G__22605;
continue;
} else {
}
break;
}

var G__22549 = args22547.length;
switch (G__22549) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22547.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20509__auto___22607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___22607,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___22607,out){
return (function (state_22579){
var state_val_22580 = (state_22579[(1)]);
if((state_val_22580 === (7))){
var inst_22559 = (state_22579[(7)]);
var inst_22558 = (state_22579[(8)]);
var inst_22558__$1 = (state_22579[(2)]);
var inst_22559__$1 = cljs.core.nth.call(null,inst_22558__$1,(0),null);
var inst_22560 = cljs.core.nth.call(null,inst_22558__$1,(1),null);
var inst_22561 = (inst_22559__$1 == null);
var state_22579__$1 = (function (){var statearr_22581 = state_22579;
(statearr_22581[(7)] = inst_22559__$1);

(statearr_22581[(8)] = inst_22558__$1);

(statearr_22581[(9)] = inst_22560);

return statearr_22581;
})();
if(cljs.core.truth_(inst_22561)){
var statearr_22582_22608 = state_22579__$1;
(statearr_22582_22608[(1)] = (8));

} else {
var statearr_22583_22609 = state_22579__$1;
(statearr_22583_22609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (1))){
var inst_22550 = cljs.core.vec.call(null,chs);
var inst_22551 = inst_22550;
var state_22579__$1 = (function (){var statearr_22584 = state_22579;
(statearr_22584[(10)] = inst_22551);

return statearr_22584;
})();
var statearr_22585_22610 = state_22579__$1;
(statearr_22585_22610[(2)] = null);

(statearr_22585_22610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (4))){
var inst_22551 = (state_22579[(10)]);
var state_22579__$1 = state_22579;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22579__$1,(7),inst_22551);
} else {
if((state_val_22580 === (6))){
var inst_22575 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22586_22611 = state_22579__$1;
(statearr_22586_22611[(2)] = inst_22575);

(statearr_22586_22611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (3))){
var inst_22577 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22579__$1,inst_22577);
} else {
if((state_val_22580 === (2))){
var inst_22551 = (state_22579[(10)]);
var inst_22553 = cljs.core.count.call(null,inst_22551);
var inst_22554 = (inst_22553 > (0));
var state_22579__$1 = state_22579;
if(cljs.core.truth_(inst_22554)){
var statearr_22588_22612 = state_22579__$1;
(statearr_22588_22612[(1)] = (4));

} else {
var statearr_22589_22613 = state_22579__$1;
(statearr_22589_22613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (11))){
var inst_22551 = (state_22579[(10)]);
var inst_22568 = (state_22579[(2)]);
var tmp22587 = inst_22551;
var inst_22551__$1 = tmp22587;
var state_22579__$1 = (function (){var statearr_22590 = state_22579;
(statearr_22590[(10)] = inst_22551__$1);

(statearr_22590[(11)] = inst_22568);

return statearr_22590;
})();
var statearr_22591_22614 = state_22579__$1;
(statearr_22591_22614[(2)] = null);

(statearr_22591_22614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (9))){
var inst_22559 = (state_22579[(7)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22579__$1,(11),out,inst_22559);
} else {
if((state_val_22580 === (5))){
var inst_22573 = cljs.core.async.close_BANG_.call(null,out);
var state_22579__$1 = state_22579;
var statearr_22592_22615 = state_22579__$1;
(statearr_22592_22615[(2)] = inst_22573);

(statearr_22592_22615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (10))){
var inst_22571 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22593_22616 = state_22579__$1;
(statearr_22593_22616[(2)] = inst_22571);

(statearr_22593_22616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (8))){
var inst_22559 = (state_22579[(7)]);
var inst_22551 = (state_22579[(10)]);
var inst_22558 = (state_22579[(8)]);
var inst_22560 = (state_22579[(9)]);
var inst_22563 = (function (){var cs = inst_22551;
var vec__22556 = inst_22558;
var v = inst_22559;
var c = inst_22560;
return ((function (cs,vec__22556,v,c,inst_22559,inst_22551,inst_22558,inst_22560,state_val_22580,c__20509__auto___22607,out){
return (function (p1__22546_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22546_SHARP_);
});
;})(cs,vec__22556,v,c,inst_22559,inst_22551,inst_22558,inst_22560,state_val_22580,c__20509__auto___22607,out))
})();
var inst_22564 = cljs.core.filterv.call(null,inst_22563,inst_22551);
var inst_22551__$1 = inst_22564;
var state_22579__$1 = (function (){var statearr_22594 = state_22579;
(statearr_22594[(10)] = inst_22551__$1);

return statearr_22594;
})();
var statearr_22595_22617 = state_22579__$1;
(statearr_22595_22617[(2)] = null);

(statearr_22595_22617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___22607,out))
;
return ((function (switch__20397__auto__,c__20509__auto___22607,out){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_22599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22599[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_22599[(1)] = (1));

return statearr_22599;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_22579){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22600){if((e22600 instanceof Object)){
var ex__20401__auto__ = e22600;
var statearr_22601_22618 = state_22579;
(statearr_22601_22618[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22619 = state_22579;
state_22579 = G__22619;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_22579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_22579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___22607,out))
})();
var state__20511__auto__ = (function (){var statearr_22602 = f__20510__auto__.call(null);
(statearr_22602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___22607);

return statearr_22602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___22607,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22620 = [];
var len__19414__auto___22669 = arguments.length;
var i__19415__auto___22670 = (0);
while(true){
if((i__19415__auto___22670 < len__19414__auto___22669)){
args22620.push((arguments[i__19415__auto___22670]));

var G__22671 = (i__19415__auto___22670 + (1));
i__19415__auto___22670 = G__22671;
continue;
} else {
}
break;
}

var G__22622 = args22620.length;
switch (G__22622) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22620.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20509__auto___22673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___22673,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___22673,out){
return (function (state_22646){
var state_val_22647 = (state_22646[(1)]);
if((state_val_22647 === (7))){
var inst_22628 = (state_22646[(7)]);
var inst_22628__$1 = (state_22646[(2)]);
var inst_22629 = (inst_22628__$1 == null);
var inst_22630 = cljs.core.not.call(null,inst_22629);
var state_22646__$1 = (function (){var statearr_22648 = state_22646;
(statearr_22648[(7)] = inst_22628__$1);

return statearr_22648;
})();
if(inst_22630){
var statearr_22649_22674 = state_22646__$1;
(statearr_22649_22674[(1)] = (8));

} else {
var statearr_22650_22675 = state_22646__$1;
(statearr_22650_22675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (1))){
var inst_22623 = (0);
var state_22646__$1 = (function (){var statearr_22651 = state_22646;
(statearr_22651[(8)] = inst_22623);

return statearr_22651;
})();
var statearr_22652_22676 = state_22646__$1;
(statearr_22652_22676[(2)] = null);

(statearr_22652_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (4))){
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22646__$1,(7),ch);
} else {
if((state_val_22647 === (6))){
var inst_22641 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22653_22677 = state_22646__$1;
(statearr_22653_22677[(2)] = inst_22641);

(statearr_22653_22677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (3))){
var inst_22643 = (state_22646[(2)]);
var inst_22644 = cljs.core.async.close_BANG_.call(null,out);
var state_22646__$1 = (function (){var statearr_22654 = state_22646;
(statearr_22654[(9)] = inst_22643);

return statearr_22654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22646__$1,inst_22644);
} else {
if((state_val_22647 === (2))){
var inst_22623 = (state_22646[(8)]);
var inst_22625 = (inst_22623 < n);
var state_22646__$1 = state_22646;
if(cljs.core.truth_(inst_22625)){
var statearr_22655_22678 = state_22646__$1;
(statearr_22655_22678[(1)] = (4));

} else {
var statearr_22656_22679 = state_22646__$1;
(statearr_22656_22679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (11))){
var inst_22623 = (state_22646[(8)]);
var inst_22633 = (state_22646[(2)]);
var inst_22634 = (inst_22623 + (1));
var inst_22623__$1 = inst_22634;
var state_22646__$1 = (function (){var statearr_22657 = state_22646;
(statearr_22657[(8)] = inst_22623__$1);

(statearr_22657[(10)] = inst_22633);

return statearr_22657;
})();
var statearr_22658_22680 = state_22646__$1;
(statearr_22658_22680[(2)] = null);

(statearr_22658_22680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (9))){
var state_22646__$1 = state_22646;
var statearr_22659_22681 = state_22646__$1;
(statearr_22659_22681[(2)] = null);

(statearr_22659_22681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (5))){
var state_22646__$1 = state_22646;
var statearr_22660_22682 = state_22646__$1;
(statearr_22660_22682[(2)] = null);

(statearr_22660_22682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (10))){
var inst_22638 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22661_22683 = state_22646__$1;
(statearr_22661_22683[(2)] = inst_22638);

(statearr_22661_22683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (8))){
var inst_22628 = (state_22646[(7)]);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22646__$1,(11),out,inst_22628);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___22673,out))
;
return ((function (switch__20397__auto__,c__20509__auto___22673,out){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_22665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22665[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_22665[(1)] = (1));

return statearr_22665;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_22646){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22666){if((e22666 instanceof Object)){
var ex__20401__auto__ = e22666;
var statearr_22667_22684 = state_22646;
(statearr_22667_22684[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22685 = state_22646;
state_22646 = G__22685;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_22646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_22646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___22673,out))
})();
var state__20511__auto__ = (function (){var statearr_22668 = f__20510__auto__.call(null);
(statearr_22668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___22673);

return statearr_22668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___22673,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22693 = (function (map_LT_,f,ch,meta22694){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22694 = meta22694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22695,meta22694__$1){
var self__ = this;
var _22695__$1 = this;
return (new cljs.core.async.t_cljs$core$async22693(self__.map_LT_,self__.f,self__.ch,meta22694__$1));
});

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22695){
var self__ = this;
var _22695__$1 = this;
return self__.meta22694;
});

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22696 = (function (map_LT_,f,ch,meta22694,_,fn1,meta22697){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22694 = meta22694;
this._ = _;
this.fn1 = fn1;
this.meta22697 = meta22697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22698,meta22697__$1){
var self__ = this;
var _22698__$1 = this;
return (new cljs.core.async.t_cljs$core$async22696(self__.map_LT_,self__.f,self__.ch,self__.meta22694,self__._,self__.fn1,meta22697__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22698){
var self__ = this;
var _22698__$1 = this;
return self__.meta22697;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22686_SHARP_){
return f1.call(null,(((p1__22686_SHARP_ == null))?null:self__.f.call(null,p1__22686_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22696.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22694","meta22694",-259917313,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22693","cljs.core.async/t_cljs$core$async22693",-1622857568,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22697","meta22697",-298245821,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22696";

cljs.core.async.t_cljs$core$async22696.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async22696");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22696 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22696(map_LT___$1,f__$1,ch__$1,meta22694__$1,___$2,fn1__$1,meta22697){
return (new cljs.core.async.t_cljs$core$async22696(map_LT___$1,f__$1,ch__$1,meta22694__$1,___$2,fn1__$1,meta22697));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22696(self__.map_LT_,self__.f,self__.ch,self__.meta22694,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18344__auto__ = ret;
if(cljs.core.truth_(and__18344__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18344__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22694","meta22694",-259917313,null)], null);
});

cljs.core.async.t_cljs$core$async22693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22693";

cljs.core.async.t_cljs$core$async22693.cljs$lang$ctorPrWriter = (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async22693");
});

cljs.core.async.__GT_t_cljs$core$async22693 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22693(map_LT___$1,f__$1,ch__$1,meta22694){
return (new cljs.core.async.t_cljs$core$async22693(map_LT___$1,f__$1,ch__$1,meta22694));
});

}

return (new cljs.core.async.t_cljs$core$async22693(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22702 = (function (map_GT_,f,ch,meta22703){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22703 = meta22703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22704,meta22703__$1){
var self__ = this;
var _22704__$1 = this;
return (new cljs.core.async.t_cljs$core$async22702(self__.map_GT_,self__.f,self__.ch,meta22703__$1));
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22704){
var self__ = this;
var _22704__$1 = this;
return self__.meta22703;
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22703","meta22703",652992542,null)], null);
});

cljs.core.async.t_cljs$core$async22702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22702";

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorPrWriter = (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async22702");
});

cljs.core.async.__GT_t_cljs$core$async22702 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22702(map_GT___$1,f__$1,ch__$1,meta22703){
return (new cljs.core.async.t_cljs$core$async22702(map_GT___$1,f__$1,ch__$1,meta22703));
});

}

return (new cljs.core.async.t_cljs$core$async22702(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22708 = (function (filter_GT_,p,ch,meta22709){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22709 = meta22709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22710,meta22709__$1){
var self__ = this;
var _22710__$1 = this;
return (new cljs.core.async.t_cljs$core$async22708(self__.filter_GT_,self__.p,self__.ch,meta22709__$1));
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22710){
var self__ = this;
var _22710__$1 = this;
return self__.meta22709;
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22709","meta22709",-341993698,null)], null);
});

cljs.core.async.t_cljs$core$async22708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22708";

cljs.core.async.t_cljs$core$async22708.cljs$lang$ctorPrWriter = (function (this__18954__auto__,writer__18955__auto__,opt__18956__auto__){
return cljs.core._write.call(null,writer__18955__auto__,"cljs.core.async/t_cljs$core$async22708");
});

cljs.core.async.__GT_t_cljs$core$async22708 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22708(filter_GT___$1,p__$1,ch__$1,meta22709){
return (new cljs.core.async.t_cljs$core$async22708(filter_GT___$1,p__$1,ch__$1,meta22709));
});

}

return (new cljs.core.async.t_cljs$core$async22708(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22711 = [];
var len__19414__auto___22755 = arguments.length;
var i__19415__auto___22756 = (0);
while(true){
if((i__19415__auto___22756 < len__19414__auto___22755)){
args22711.push((arguments[i__19415__auto___22756]));

var G__22757 = (i__19415__auto___22756 + (1));
i__19415__auto___22756 = G__22757;
continue;
} else {
}
break;
}

var G__22713 = args22711.length;
switch (G__22713) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22711.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20509__auto___22759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___22759,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___22759,out){
return (function (state_22734){
var state_val_22735 = (state_22734[(1)]);
if((state_val_22735 === (7))){
var inst_22730 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
var statearr_22736_22760 = state_22734__$1;
(statearr_22736_22760[(2)] = inst_22730);

(statearr_22736_22760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (1))){
var state_22734__$1 = state_22734;
var statearr_22737_22761 = state_22734__$1;
(statearr_22737_22761[(2)] = null);

(statearr_22737_22761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (4))){
var inst_22716 = (state_22734[(7)]);
var inst_22716__$1 = (state_22734[(2)]);
var inst_22717 = (inst_22716__$1 == null);
var state_22734__$1 = (function (){var statearr_22738 = state_22734;
(statearr_22738[(7)] = inst_22716__$1);

return statearr_22738;
})();
if(cljs.core.truth_(inst_22717)){
var statearr_22739_22762 = state_22734__$1;
(statearr_22739_22762[(1)] = (5));

} else {
var statearr_22740_22763 = state_22734__$1;
(statearr_22740_22763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (6))){
var inst_22716 = (state_22734[(7)]);
var inst_22721 = p.call(null,inst_22716);
var state_22734__$1 = state_22734;
if(cljs.core.truth_(inst_22721)){
var statearr_22741_22764 = state_22734__$1;
(statearr_22741_22764[(1)] = (8));

} else {
var statearr_22742_22765 = state_22734__$1;
(statearr_22742_22765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (3))){
var inst_22732 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22734__$1,inst_22732);
} else {
if((state_val_22735 === (2))){
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22734__$1,(4),ch);
} else {
if((state_val_22735 === (11))){
var inst_22724 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
var statearr_22743_22766 = state_22734__$1;
(statearr_22743_22766[(2)] = inst_22724);

(statearr_22743_22766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (9))){
var state_22734__$1 = state_22734;
var statearr_22744_22767 = state_22734__$1;
(statearr_22744_22767[(2)] = null);

(statearr_22744_22767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (5))){
var inst_22719 = cljs.core.async.close_BANG_.call(null,out);
var state_22734__$1 = state_22734;
var statearr_22745_22768 = state_22734__$1;
(statearr_22745_22768[(2)] = inst_22719);

(statearr_22745_22768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (10))){
var inst_22727 = (state_22734[(2)]);
var state_22734__$1 = (function (){var statearr_22746 = state_22734;
(statearr_22746[(8)] = inst_22727);

return statearr_22746;
})();
var statearr_22747_22769 = state_22734__$1;
(statearr_22747_22769[(2)] = null);

(statearr_22747_22769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (8))){
var inst_22716 = (state_22734[(7)]);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22734__$1,(11),out,inst_22716);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___22759,out))
;
return ((function (switch__20397__auto__,c__20509__auto___22759,out){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_22751 = [null,null,null,null,null,null,null,null,null];
(statearr_22751[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_22751[(1)] = (1));

return statearr_22751;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_22734){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22752){if((e22752 instanceof Object)){
var ex__20401__auto__ = e22752;
var statearr_22753_22770 = state_22734;
(statearr_22753_22770[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22771 = state_22734;
state_22734 = G__22771;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_22734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_22734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___22759,out))
})();
var state__20511__auto__ = (function (){var statearr_22754 = f__20510__auto__.call(null);
(statearr_22754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___22759);

return statearr_22754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___22759,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22772 = [];
var len__19414__auto___22775 = arguments.length;
var i__19415__auto___22776 = (0);
while(true){
if((i__19415__auto___22776 < len__19414__auto___22775)){
args22772.push((arguments[i__19415__auto___22776]));

var G__22777 = (i__19415__auto___22776 + (1));
i__19415__auto___22776 = G__22777;
continue;
} else {
}
break;
}

var G__22774 = args22772.length;
switch (G__22774) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22772.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__){
return (function (state_22944){
var state_val_22945 = (state_22944[(1)]);
if((state_val_22945 === (7))){
var inst_22940 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22946_22987 = state_22944__$1;
(statearr_22946_22987[(2)] = inst_22940);

(statearr_22946_22987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (20))){
var inst_22910 = (state_22944[(7)]);
var inst_22921 = (state_22944[(2)]);
var inst_22922 = cljs.core.next.call(null,inst_22910);
var inst_22896 = inst_22922;
var inst_22897 = null;
var inst_22898 = (0);
var inst_22899 = (0);
var state_22944__$1 = (function (){var statearr_22947 = state_22944;
(statearr_22947[(8)] = inst_22896);

(statearr_22947[(9)] = inst_22899);

(statearr_22947[(10)] = inst_22921);

(statearr_22947[(11)] = inst_22897);

(statearr_22947[(12)] = inst_22898);

return statearr_22947;
})();
var statearr_22948_22988 = state_22944__$1;
(statearr_22948_22988[(2)] = null);

(statearr_22948_22988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (1))){
var state_22944__$1 = state_22944;
var statearr_22949_22989 = state_22944__$1;
(statearr_22949_22989[(2)] = null);

(statearr_22949_22989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (4))){
var inst_22885 = (state_22944[(13)]);
var inst_22885__$1 = (state_22944[(2)]);
var inst_22886 = (inst_22885__$1 == null);
var state_22944__$1 = (function (){var statearr_22950 = state_22944;
(statearr_22950[(13)] = inst_22885__$1);

return statearr_22950;
})();
if(cljs.core.truth_(inst_22886)){
var statearr_22951_22990 = state_22944__$1;
(statearr_22951_22990[(1)] = (5));

} else {
var statearr_22952_22991 = state_22944__$1;
(statearr_22952_22991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (15))){
var state_22944__$1 = state_22944;
var statearr_22956_22992 = state_22944__$1;
(statearr_22956_22992[(2)] = null);

(statearr_22956_22992[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (21))){
var state_22944__$1 = state_22944;
var statearr_22957_22993 = state_22944__$1;
(statearr_22957_22993[(2)] = null);

(statearr_22957_22993[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (13))){
var inst_22896 = (state_22944[(8)]);
var inst_22899 = (state_22944[(9)]);
var inst_22897 = (state_22944[(11)]);
var inst_22898 = (state_22944[(12)]);
var inst_22906 = (state_22944[(2)]);
var inst_22907 = (inst_22899 + (1));
var tmp22953 = inst_22896;
var tmp22954 = inst_22897;
var tmp22955 = inst_22898;
var inst_22896__$1 = tmp22953;
var inst_22897__$1 = tmp22954;
var inst_22898__$1 = tmp22955;
var inst_22899__$1 = inst_22907;
var state_22944__$1 = (function (){var statearr_22958 = state_22944;
(statearr_22958[(8)] = inst_22896__$1);

(statearr_22958[(9)] = inst_22899__$1);

(statearr_22958[(11)] = inst_22897__$1);

(statearr_22958[(12)] = inst_22898__$1);

(statearr_22958[(14)] = inst_22906);

return statearr_22958;
})();
var statearr_22959_22994 = state_22944__$1;
(statearr_22959_22994[(2)] = null);

(statearr_22959_22994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (22))){
var state_22944__$1 = state_22944;
var statearr_22960_22995 = state_22944__$1;
(statearr_22960_22995[(2)] = null);

(statearr_22960_22995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (6))){
var inst_22885 = (state_22944[(13)]);
var inst_22894 = f.call(null,inst_22885);
var inst_22895 = cljs.core.seq.call(null,inst_22894);
var inst_22896 = inst_22895;
var inst_22897 = null;
var inst_22898 = (0);
var inst_22899 = (0);
var state_22944__$1 = (function (){var statearr_22961 = state_22944;
(statearr_22961[(8)] = inst_22896);

(statearr_22961[(9)] = inst_22899);

(statearr_22961[(11)] = inst_22897);

(statearr_22961[(12)] = inst_22898);

return statearr_22961;
})();
var statearr_22962_22996 = state_22944__$1;
(statearr_22962_22996[(2)] = null);

(statearr_22962_22996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (17))){
var inst_22910 = (state_22944[(7)]);
var inst_22914 = cljs.core.chunk_first.call(null,inst_22910);
var inst_22915 = cljs.core.chunk_rest.call(null,inst_22910);
var inst_22916 = cljs.core.count.call(null,inst_22914);
var inst_22896 = inst_22915;
var inst_22897 = inst_22914;
var inst_22898 = inst_22916;
var inst_22899 = (0);
var state_22944__$1 = (function (){var statearr_22963 = state_22944;
(statearr_22963[(8)] = inst_22896);

(statearr_22963[(9)] = inst_22899);

(statearr_22963[(11)] = inst_22897);

(statearr_22963[(12)] = inst_22898);

return statearr_22963;
})();
var statearr_22964_22997 = state_22944__$1;
(statearr_22964_22997[(2)] = null);

(statearr_22964_22997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (3))){
var inst_22942 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22944__$1,inst_22942);
} else {
if((state_val_22945 === (12))){
var inst_22930 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22965_22998 = state_22944__$1;
(statearr_22965_22998[(2)] = inst_22930);

(statearr_22965_22998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (2))){
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22944__$1,(4),in$);
} else {
if((state_val_22945 === (23))){
var inst_22938 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22966_22999 = state_22944__$1;
(statearr_22966_22999[(2)] = inst_22938);

(statearr_22966_22999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (19))){
var inst_22925 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22967_23000 = state_22944__$1;
(statearr_22967_23000[(2)] = inst_22925);

(statearr_22967_23000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (11))){
var inst_22896 = (state_22944[(8)]);
var inst_22910 = (state_22944[(7)]);
var inst_22910__$1 = cljs.core.seq.call(null,inst_22896);
var state_22944__$1 = (function (){var statearr_22968 = state_22944;
(statearr_22968[(7)] = inst_22910__$1);

return statearr_22968;
})();
if(inst_22910__$1){
var statearr_22969_23001 = state_22944__$1;
(statearr_22969_23001[(1)] = (14));

} else {
var statearr_22970_23002 = state_22944__$1;
(statearr_22970_23002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (9))){
var inst_22932 = (state_22944[(2)]);
var inst_22933 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22944__$1 = (function (){var statearr_22971 = state_22944;
(statearr_22971[(15)] = inst_22932);

return statearr_22971;
})();
if(cljs.core.truth_(inst_22933)){
var statearr_22972_23003 = state_22944__$1;
(statearr_22972_23003[(1)] = (21));

} else {
var statearr_22973_23004 = state_22944__$1;
(statearr_22973_23004[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (5))){
var inst_22888 = cljs.core.async.close_BANG_.call(null,out);
var state_22944__$1 = state_22944;
var statearr_22974_23005 = state_22944__$1;
(statearr_22974_23005[(2)] = inst_22888);

(statearr_22974_23005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (14))){
var inst_22910 = (state_22944[(7)]);
var inst_22912 = cljs.core.chunked_seq_QMARK_.call(null,inst_22910);
var state_22944__$1 = state_22944;
if(inst_22912){
var statearr_22975_23006 = state_22944__$1;
(statearr_22975_23006[(1)] = (17));

} else {
var statearr_22976_23007 = state_22944__$1;
(statearr_22976_23007[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (16))){
var inst_22928 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22977_23008 = state_22944__$1;
(statearr_22977_23008[(2)] = inst_22928);

(statearr_22977_23008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (10))){
var inst_22899 = (state_22944[(9)]);
var inst_22897 = (state_22944[(11)]);
var inst_22904 = cljs.core._nth.call(null,inst_22897,inst_22899);
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22944__$1,(13),out,inst_22904);
} else {
if((state_val_22945 === (18))){
var inst_22910 = (state_22944[(7)]);
var inst_22919 = cljs.core.first.call(null,inst_22910);
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22944__$1,(20),out,inst_22919);
} else {
if((state_val_22945 === (8))){
var inst_22899 = (state_22944[(9)]);
var inst_22898 = (state_22944[(12)]);
var inst_22901 = (inst_22899 < inst_22898);
var inst_22902 = inst_22901;
var state_22944__$1 = state_22944;
if(cljs.core.truth_(inst_22902)){
var statearr_22978_23009 = state_22944__$1;
(statearr_22978_23009[(1)] = (10));

} else {
var statearr_22979_23010 = state_22944__$1;
(statearr_22979_23010[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto__))
;
return ((function (switch__20397__auto__,c__20509__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20398__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20398__auto____0 = (function (){
var statearr_22983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22983[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20398__auto__);

(statearr_22983[(1)] = (1));

return statearr_22983;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20398__auto____1 = (function (state_22944){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_22944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e22984){if((e22984 instanceof Object)){
var ex__20401__auto__ = e22984;
var statearr_22985_23011 = state_22944;
(statearr_22985_23011[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23012 = state_22944;
state_22944 = G__23012;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20398__auto__ = function(state_22944){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20398__auto____1.call(this,state_22944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20398__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20398__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__))
})();
var state__20511__auto__ = (function (){var statearr_22986 = f__20510__auto__.call(null);
(statearr_22986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_22986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__))
);

return c__20509__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23013 = [];
var len__19414__auto___23016 = arguments.length;
var i__19415__auto___23017 = (0);
while(true){
if((i__19415__auto___23017 < len__19414__auto___23016)){
args23013.push((arguments[i__19415__auto___23017]));

var G__23018 = (i__19415__auto___23017 + (1));
i__19415__auto___23017 = G__23018;
continue;
} else {
}
break;
}

var G__23015 = args23013.length;
switch (G__23015) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23013.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23020 = [];
var len__19414__auto___23023 = arguments.length;
var i__19415__auto___23024 = (0);
while(true){
if((i__19415__auto___23024 < len__19414__auto___23023)){
args23020.push((arguments[i__19415__auto___23024]));

var G__23025 = (i__19415__auto___23024 + (1));
i__19415__auto___23024 = G__23025;
continue;
} else {
}
break;
}

var G__23022 = args23020.length;
switch (G__23022) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23020.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23027 = [];
var len__19414__auto___23078 = arguments.length;
var i__19415__auto___23079 = (0);
while(true){
if((i__19415__auto___23079 < len__19414__auto___23078)){
args23027.push((arguments[i__19415__auto___23079]));

var G__23080 = (i__19415__auto___23079 + (1));
i__19415__auto___23079 = G__23080;
continue;
} else {
}
break;
}

var G__23029 = args23027.length;
switch (G__23029) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23027.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20509__auto___23082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___23082,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___23082,out){
return (function (state_23053){
var state_val_23054 = (state_23053[(1)]);
if((state_val_23054 === (7))){
var inst_23048 = (state_23053[(2)]);
var state_23053__$1 = state_23053;
var statearr_23055_23083 = state_23053__$1;
(statearr_23055_23083[(2)] = inst_23048);

(statearr_23055_23083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (1))){
var inst_23030 = null;
var state_23053__$1 = (function (){var statearr_23056 = state_23053;
(statearr_23056[(7)] = inst_23030);

return statearr_23056;
})();
var statearr_23057_23084 = state_23053__$1;
(statearr_23057_23084[(2)] = null);

(statearr_23057_23084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (4))){
var inst_23033 = (state_23053[(8)]);
var inst_23033__$1 = (state_23053[(2)]);
var inst_23034 = (inst_23033__$1 == null);
var inst_23035 = cljs.core.not.call(null,inst_23034);
var state_23053__$1 = (function (){var statearr_23058 = state_23053;
(statearr_23058[(8)] = inst_23033__$1);

return statearr_23058;
})();
if(inst_23035){
var statearr_23059_23085 = state_23053__$1;
(statearr_23059_23085[(1)] = (5));

} else {
var statearr_23060_23086 = state_23053__$1;
(statearr_23060_23086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (6))){
var state_23053__$1 = state_23053;
var statearr_23061_23087 = state_23053__$1;
(statearr_23061_23087[(2)] = null);

(statearr_23061_23087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (3))){
var inst_23050 = (state_23053[(2)]);
var inst_23051 = cljs.core.async.close_BANG_.call(null,out);
var state_23053__$1 = (function (){var statearr_23062 = state_23053;
(statearr_23062[(9)] = inst_23050);

return statearr_23062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23053__$1,inst_23051);
} else {
if((state_val_23054 === (2))){
var state_23053__$1 = state_23053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23053__$1,(4),ch);
} else {
if((state_val_23054 === (11))){
var inst_23033 = (state_23053[(8)]);
var inst_23042 = (state_23053[(2)]);
var inst_23030 = inst_23033;
var state_23053__$1 = (function (){var statearr_23063 = state_23053;
(statearr_23063[(7)] = inst_23030);

(statearr_23063[(10)] = inst_23042);

return statearr_23063;
})();
var statearr_23064_23088 = state_23053__$1;
(statearr_23064_23088[(2)] = null);

(statearr_23064_23088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (9))){
var inst_23033 = (state_23053[(8)]);
var state_23053__$1 = state_23053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23053__$1,(11),out,inst_23033);
} else {
if((state_val_23054 === (5))){
var inst_23030 = (state_23053[(7)]);
var inst_23033 = (state_23053[(8)]);
var inst_23037 = cljs.core._EQ_.call(null,inst_23033,inst_23030);
var state_23053__$1 = state_23053;
if(inst_23037){
var statearr_23066_23089 = state_23053__$1;
(statearr_23066_23089[(1)] = (8));

} else {
var statearr_23067_23090 = state_23053__$1;
(statearr_23067_23090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (10))){
var inst_23045 = (state_23053[(2)]);
var state_23053__$1 = state_23053;
var statearr_23068_23091 = state_23053__$1;
(statearr_23068_23091[(2)] = inst_23045);

(statearr_23068_23091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (8))){
var inst_23030 = (state_23053[(7)]);
var tmp23065 = inst_23030;
var inst_23030__$1 = tmp23065;
var state_23053__$1 = (function (){var statearr_23069 = state_23053;
(statearr_23069[(7)] = inst_23030__$1);

return statearr_23069;
})();
var statearr_23070_23092 = state_23053__$1;
(statearr_23070_23092[(2)] = null);

(statearr_23070_23092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___23082,out))
;
return ((function (switch__20397__auto__,c__20509__auto___23082,out){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_23074 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23074[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_23074[(1)] = (1));

return statearr_23074;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_23053){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_23053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e23075){if((e23075 instanceof Object)){
var ex__20401__auto__ = e23075;
var statearr_23076_23093 = state_23053;
(statearr_23076_23093[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23094 = state_23053;
state_23053 = G__23094;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_23053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_23053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___23082,out))
})();
var state__20511__auto__ = (function (){var statearr_23077 = f__20510__auto__.call(null);
(statearr_23077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___23082);

return statearr_23077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___23082,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23095 = [];
var len__19414__auto___23165 = arguments.length;
var i__19415__auto___23166 = (0);
while(true){
if((i__19415__auto___23166 < len__19414__auto___23165)){
args23095.push((arguments[i__19415__auto___23166]));

var G__23167 = (i__19415__auto___23166 + (1));
i__19415__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var G__23097 = args23095.length;
switch (G__23097) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23095.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20509__auto___23169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___23169,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___23169,out){
return (function (state_23135){
var state_val_23136 = (state_23135[(1)]);
if((state_val_23136 === (7))){
var inst_23131 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23137_23170 = state_23135__$1;
(statearr_23137_23170[(2)] = inst_23131);

(statearr_23137_23170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (1))){
var inst_23098 = (new Array(n));
var inst_23099 = inst_23098;
var inst_23100 = (0);
var state_23135__$1 = (function (){var statearr_23138 = state_23135;
(statearr_23138[(7)] = inst_23099);

(statearr_23138[(8)] = inst_23100);

return statearr_23138;
})();
var statearr_23139_23171 = state_23135__$1;
(statearr_23139_23171[(2)] = null);

(statearr_23139_23171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (4))){
var inst_23103 = (state_23135[(9)]);
var inst_23103__$1 = (state_23135[(2)]);
var inst_23104 = (inst_23103__$1 == null);
var inst_23105 = cljs.core.not.call(null,inst_23104);
var state_23135__$1 = (function (){var statearr_23140 = state_23135;
(statearr_23140[(9)] = inst_23103__$1);

return statearr_23140;
})();
if(inst_23105){
var statearr_23141_23172 = state_23135__$1;
(statearr_23141_23172[(1)] = (5));

} else {
var statearr_23142_23173 = state_23135__$1;
(statearr_23142_23173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (15))){
var inst_23125 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23143_23174 = state_23135__$1;
(statearr_23143_23174[(2)] = inst_23125);

(statearr_23143_23174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (13))){
var state_23135__$1 = state_23135;
var statearr_23144_23175 = state_23135__$1;
(statearr_23144_23175[(2)] = null);

(statearr_23144_23175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (6))){
var inst_23100 = (state_23135[(8)]);
var inst_23121 = (inst_23100 > (0));
var state_23135__$1 = state_23135;
if(cljs.core.truth_(inst_23121)){
var statearr_23145_23176 = state_23135__$1;
(statearr_23145_23176[(1)] = (12));

} else {
var statearr_23146_23177 = state_23135__$1;
(statearr_23146_23177[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (3))){
var inst_23133 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23135__$1,inst_23133);
} else {
if((state_val_23136 === (12))){
var inst_23099 = (state_23135[(7)]);
var inst_23123 = cljs.core.vec.call(null,inst_23099);
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23135__$1,(15),out,inst_23123);
} else {
if((state_val_23136 === (2))){
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23135__$1,(4),ch);
} else {
if((state_val_23136 === (11))){
var inst_23115 = (state_23135[(2)]);
var inst_23116 = (new Array(n));
var inst_23099 = inst_23116;
var inst_23100 = (0);
var state_23135__$1 = (function (){var statearr_23147 = state_23135;
(statearr_23147[(7)] = inst_23099);

(statearr_23147[(10)] = inst_23115);

(statearr_23147[(8)] = inst_23100);

return statearr_23147;
})();
var statearr_23148_23178 = state_23135__$1;
(statearr_23148_23178[(2)] = null);

(statearr_23148_23178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (9))){
var inst_23099 = (state_23135[(7)]);
var inst_23113 = cljs.core.vec.call(null,inst_23099);
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23135__$1,(11),out,inst_23113);
} else {
if((state_val_23136 === (5))){
var inst_23099 = (state_23135[(7)]);
var inst_23108 = (state_23135[(11)]);
var inst_23100 = (state_23135[(8)]);
var inst_23103 = (state_23135[(9)]);
var inst_23107 = (inst_23099[inst_23100] = inst_23103);
var inst_23108__$1 = (inst_23100 + (1));
var inst_23109 = (inst_23108__$1 < n);
var state_23135__$1 = (function (){var statearr_23149 = state_23135;
(statearr_23149[(12)] = inst_23107);

(statearr_23149[(11)] = inst_23108__$1);

return statearr_23149;
})();
if(cljs.core.truth_(inst_23109)){
var statearr_23150_23179 = state_23135__$1;
(statearr_23150_23179[(1)] = (8));

} else {
var statearr_23151_23180 = state_23135__$1;
(statearr_23151_23180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (14))){
var inst_23128 = (state_23135[(2)]);
var inst_23129 = cljs.core.async.close_BANG_.call(null,out);
var state_23135__$1 = (function (){var statearr_23153 = state_23135;
(statearr_23153[(13)] = inst_23128);

return statearr_23153;
})();
var statearr_23154_23181 = state_23135__$1;
(statearr_23154_23181[(2)] = inst_23129);

(statearr_23154_23181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (10))){
var inst_23119 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23155_23182 = state_23135__$1;
(statearr_23155_23182[(2)] = inst_23119);

(statearr_23155_23182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (8))){
var inst_23099 = (state_23135[(7)]);
var inst_23108 = (state_23135[(11)]);
var tmp23152 = inst_23099;
var inst_23099__$1 = tmp23152;
var inst_23100 = inst_23108;
var state_23135__$1 = (function (){var statearr_23156 = state_23135;
(statearr_23156[(7)] = inst_23099__$1);

(statearr_23156[(8)] = inst_23100);

return statearr_23156;
})();
var statearr_23157_23183 = state_23135__$1;
(statearr_23157_23183[(2)] = null);

(statearr_23157_23183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___23169,out))
;
return ((function (switch__20397__auto__,c__20509__auto___23169,out){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_23161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23161[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_23161[(1)] = (1));

return statearr_23161;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_23135){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_23135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e23162){if((e23162 instanceof Object)){
var ex__20401__auto__ = e23162;
var statearr_23163_23184 = state_23135;
(statearr_23163_23184[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23185 = state_23135;
state_23135 = G__23185;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_23135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_23135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___23169,out))
})();
var state__20511__auto__ = (function (){var statearr_23164 = f__20510__auto__.call(null);
(statearr_23164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___23169);

return statearr_23164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___23169,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23186 = [];
var len__19414__auto___23260 = arguments.length;
var i__19415__auto___23261 = (0);
while(true){
if((i__19415__auto___23261 < len__19414__auto___23260)){
args23186.push((arguments[i__19415__auto___23261]));

var G__23262 = (i__19415__auto___23261 + (1));
i__19415__auto___23261 = G__23262;
continue;
} else {
}
break;
}

var G__23188 = args23186.length;
switch (G__23188) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23186.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20509__auto___23264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___23264,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___23264,out){
return (function (state_23230){
var state_val_23231 = (state_23230[(1)]);
if((state_val_23231 === (7))){
var inst_23226 = (state_23230[(2)]);
var state_23230__$1 = state_23230;
var statearr_23232_23265 = state_23230__$1;
(statearr_23232_23265[(2)] = inst_23226);

(statearr_23232_23265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (1))){
var inst_23189 = [];
var inst_23190 = inst_23189;
var inst_23191 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23230__$1 = (function (){var statearr_23233 = state_23230;
(statearr_23233[(7)] = inst_23191);

(statearr_23233[(8)] = inst_23190);

return statearr_23233;
})();
var statearr_23234_23266 = state_23230__$1;
(statearr_23234_23266[(2)] = null);

(statearr_23234_23266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (4))){
var inst_23194 = (state_23230[(9)]);
var inst_23194__$1 = (state_23230[(2)]);
var inst_23195 = (inst_23194__$1 == null);
var inst_23196 = cljs.core.not.call(null,inst_23195);
var state_23230__$1 = (function (){var statearr_23235 = state_23230;
(statearr_23235[(9)] = inst_23194__$1);

return statearr_23235;
})();
if(inst_23196){
var statearr_23236_23267 = state_23230__$1;
(statearr_23236_23267[(1)] = (5));

} else {
var statearr_23237_23268 = state_23230__$1;
(statearr_23237_23268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (15))){
var inst_23220 = (state_23230[(2)]);
var state_23230__$1 = state_23230;
var statearr_23238_23269 = state_23230__$1;
(statearr_23238_23269[(2)] = inst_23220);

(statearr_23238_23269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (13))){
var state_23230__$1 = state_23230;
var statearr_23239_23270 = state_23230__$1;
(statearr_23239_23270[(2)] = null);

(statearr_23239_23270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (6))){
var inst_23190 = (state_23230[(8)]);
var inst_23215 = inst_23190.length;
var inst_23216 = (inst_23215 > (0));
var state_23230__$1 = state_23230;
if(cljs.core.truth_(inst_23216)){
var statearr_23240_23271 = state_23230__$1;
(statearr_23240_23271[(1)] = (12));

} else {
var statearr_23241_23272 = state_23230__$1;
(statearr_23241_23272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (3))){
var inst_23228 = (state_23230[(2)]);
var state_23230__$1 = state_23230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23230__$1,inst_23228);
} else {
if((state_val_23231 === (12))){
var inst_23190 = (state_23230[(8)]);
var inst_23218 = cljs.core.vec.call(null,inst_23190);
var state_23230__$1 = state_23230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23230__$1,(15),out,inst_23218);
} else {
if((state_val_23231 === (2))){
var state_23230__$1 = state_23230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23230__$1,(4),ch);
} else {
if((state_val_23231 === (11))){
var inst_23194 = (state_23230[(9)]);
var inst_23198 = (state_23230[(10)]);
var inst_23208 = (state_23230[(2)]);
var inst_23209 = [];
var inst_23210 = inst_23209.push(inst_23194);
var inst_23190 = inst_23209;
var inst_23191 = inst_23198;
var state_23230__$1 = (function (){var statearr_23242 = state_23230;
(statearr_23242[(7)] = inst_23191);

(statearr_23242[(11)] = inst_23210);

(statearr_23242[(12)] = inst_23208);

(statearr_23242[(8)] = inst_23190);

return statearr_23242;
})();
var statearr_23243_23273 = state_23230__$1;
(statearr_23243_23273[(2)] = null);

(statearr_23243_23273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (9))){
var inst_23190 = (state_23230[(8)]);
var inst_23206 = cljs.core.vec.call(null,inst_23190);
var state_23230__$1 = state_23230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23230__$1,(11),out,inst_23206);
} else {
if((state_val_23231 === (5))){
var inst_23194 = (state_23230[(9)]);
var inst_23198 = (state_23230[(10)]);
var inst_23191 = (state_23230[(7)]);
var inst_23198__$1 = f.call(null,inst_23194);
var inst_23199 = cljs.core._EQ_.call(null,inst_23198__$1,inst_23191);
var inst_23200 = cljs.core.keyword_identical_QMARK_.call(null,inst_23191,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23201 = (inst_23199) || (inst_23200);
var state_23230__$1 = (function (){var statearr_23244 = state_23230;
(statearr_23244[(10)] = inst_23198__$1);

return statearr_23244;
})();
if(cljs.core.truth_(inst_23201)){
var statearr_23245_23274 = state_23230__$1;
(statearr_23245_23274[(1)] = (8));

} else {
var statearr_23246_23275 = state_23230__$1;
(statearr_23246_23275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (14))){
var inst_23223 = (state_23230[(2)]);
var inst_23224 = cljs.core.async.close_BANG_.call(null,out);
var state_23230__$1 = (function (){var statearr_23248 = state_23230;
(statearr_23248[(13)] = inst_23223);

return statearr_23248;
})();
var statearr_23249_23276 = state_23230__$1;
(statearr_23249_23276[(2)] = inst_23224);

(statearr_23249_23276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (10))){
var inst_23213 = (state_23230[(2)]);
var state_23230__$1 = state_23230;
var statearr_23250_23277 = state_23230__$1;
(statearr_23250_23277[(2)] = inst_23213);

(statearr_23250_23277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23231 === (8))){
var inst_23194 = (state_23230[(9)]);
var inst_23198 = (state_23230[(10)]);
var inst_23190 = (state_23230[(8)]);
var inst_23203 = inst_23190.push(inst_23194);
var tmp23247 = inst_23190;
var inst_23190__$1 = tmp23247;
var inst_23191 = inst_23198;
var state_23230__$1 = (function (){var statearr_23251 = state_23230;
(statearr_23251[(7)] = inst_23191);

(statearr_23251[(14)] = inst_23203);

(statearr_23251[(8)] = inst_23190__$1);

return statearr_23251;
})();
var statearr_23252_23278 = state_23230__$1;
(statearr_23252_23278[(2)] = null);

(statearr_23252_23278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___23264,out))
;
return ((function (switch__20397__auto__,c__20509__auto___23264,out){
return (function() {
var cljs$core$async$state_machine__20398__auto__ = null;
var cljs$core$async$state_machine__20398__auto____0 = (function (){
var statearr_23256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23256[(0)] = cljs$core$async$state_machine__20398__auto__);

(statearr_23256[(1)] = (1));

return statearr_23256;
});
var cljs$core$async$state_machine__20398__auto____1 = (function (state_23230){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_23230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e23257){if((e23257 instanceof Object)){
var ex__20401__auto__ = e23257;
var statearr_23258_23279 = state_23230;
(statearr_23258_23279[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23280 = state_23230;
state_23230 = G__23280;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
cljs$core$async$state_machine__20398__auto__ = function(state_23230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20398__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20398__auto____1.call(this,state_23230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20398__auto____0;
cljs$core$async$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20398__auto____1;
return cljs$core$async$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___23264,out))
})();
var state__20511__auto__ = (function (){var statearr_23259 = f__20510__auto__.call(null);
(statearr_23259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___23264);

return statearr_23259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___23264,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454621191164