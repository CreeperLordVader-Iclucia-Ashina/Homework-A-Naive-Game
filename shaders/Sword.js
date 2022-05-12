const SwordVertexShader=
`attribute vec3 vPos;
attribute vec3 vColor;
uniform mat4 proj;
uniform mat4 model;
varying highp vec4 aColor;
void main()
{
    gl_Position=proj*model*vec4(vPos.x,vPos.y,vPos.z,1.0);
    aColor=vec4(vColor.x,vColor.y,vColor.z,1.0);
}
`

const SwordFragmentShader=
`varying highp vec4 aColor;
void main()
{
    gl_FragColor=aColor;
}
`;