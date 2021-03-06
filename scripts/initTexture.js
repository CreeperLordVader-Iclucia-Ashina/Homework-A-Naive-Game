let TexCnt=0;
const ImgName=
[
    "rt.png","lf.png","up.png","dn.png","ft.png","bk.png"
];
function initSkyBoxTexture(gl)
{
    const tex=gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP,tex);
	for (let i = 0; i < 6; i++)
	{
        const img=document.getElementById("Level-1/"+ImgName[i]);
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);//这个地方API很复杂，这么写才是比较简便并且符合API规范的
		console.log(img.id+" loaded successfully");
	}
	gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);
	console.log("SkyBox loaded successfully");
	return tex;
}
function initTex(gl,ID,is_png)
{
	const tex=gl.createTexture();
	gl.activeTexture(gl.TEXTURE0+TexCnt);
	TexCnt++;
	console.log(gl.getParameter(gl.ACTIVE_TEXTURE));
    gl.bindTexture(gl.TEXTURE_2D,tex);
    const img=document.getElementById(ID);
	if(is_png)gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);//这个地方API很复杂，这么写才是比较简便并且符合API规范的
	else gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,img);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl.REPEAT);
	console.log(img.id+" loaded successfully");
	return TexCnt-1;
}