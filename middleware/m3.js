function pv(ctx){
	global.console.log("m3")
};
module.exports=function(){
	return async function(ctx,next){
		pv(ctx);
		await next()
		
	}
}