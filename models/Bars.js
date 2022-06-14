const BOUND=27.5;
const HPver=
[
	-0.9,0.8,-1.0,
	-0.9,0.77,-1.0,
	-0.5,0.77,-1.0,
	-0.5,0.8,-1.0
]
const SPver =
[
	-0.9,0.77,-1.0,
	-0.9,0.74,-1.0,
	-0.5,0.74,-1.0,
	-0.5,0.77,-1.0
]
const FloorVer=
[
	-BOUND,-1.0,-BOUND,0.0,0.0,
	-BOUND,-1.0,BOUND,0.0,1.0,
	BOUND,-1.0,BOUND,1.0,1.0,
	BOUND,-1.0,-BOUND,1.0,0.0,
]
const TexSq=//带有纹理坐标的正方形
[
	-2.0,0.0,2.0,0.0,1.0,
	-2.0,0.0,-2.0,0.0,0.0,
	2.0,0.0,-2.0,1.0,0.0,
	2.0,0.0,2.0,1.0,1.0
]
const BarIdx=
[
	0,1,2,
	0,2,3
]