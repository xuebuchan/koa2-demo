function pv(ctx){
	global.console.log("m1")
};
module.exports=function(){
	return async function(ctx,next){
		pv(ctx);
		await next()
		
	}
}