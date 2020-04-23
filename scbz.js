window.onload=function () {
    let dbtn = document.getElementById('btn')
    let dyear = document.getElementById('year')
    let dchineseMonth = document.getElementById('chineseMonth')
    let dwestMonth = document.getElementById('westMonth')
    let dday = document.getElementById('day')
    let dhour = document.getElementById('hour')
    dbtn.onclick=function () {
        let vy = dyear.value
        let vcm = dchineseMonth.value
        let vwm = dwestMonth.value
        let vd = dday.value
        let h = dhour.value
        let sc = 0
        switch (true) {
            case (h>=23&&h<24)||(h>=0&&h<1): sc = 1
                break
            case (h>=1&&h<3):sc = 2
                break
            case (h>=3&&h<5):sc = 3
                break
            case (h>=5&&h<7):sc = 4
                break
            case (h>=7&&h<9):sc = 5
                break
            case (h>=9&&h<11):sc = 6
                break
            case (h>=11&&h<13):sc = 7
                break
            case (h>=13&&h<15):sc = 8
                break
            case (h>=15&&h<17):sc = 9
                break
            case (h>=17&&h<19):sc = 10
                break
            case (h>=19&&h<21):sc = 11
                break
            case (h>=21&&h<23):sc = 12
                break
        }
        const y = require('./nz')
        const m = require('./yz')
        const r = require('./rz')
        const s = require('./sz')
        vy = vy*1,vcm = vcm*1 , vwm = vwm*1 ,vd = vd*1 ,sc =sc*1
        console.log(vy,vcm,vwm,vd,sc)
        let nz = y(vy)
        let ng = nz.substr(0,1)
        let yz = m(ng,vcm)
        let rz = r(vy,vwm,vd)
        let rg = rz.substr(0,1)
        let sz = s(rg,sc)
        console.log(nz,yz,rz,sz)
        // console.log(y,cm,wm,d,sc)
        let res = document.getElementById('result')
        res.textContent = nz+yz+rz+sz
    }


}





