var express = require('express')
var app = express()
var router= express.Router()
var path=require('path')
var agency = require('../models/agency');

router.get('/add-agency', function(req,res) {
	const agencys=new agency({
		name: '국토해양부',
		detail: '육로와 항공 운송 및 국토의 종합 개발 계획 수립과 조정',
		policy: '육로와 항공 운송 정책',
    link: 'http://www.molit.go.kr/portal.do',
	});
	agencys.save()
		.then((result) =>{
			res.send(result)
		})
		.catch((err)=> {
			console.log(err)
		});
});

//main page는 login이 될때만 (세션정보가 있을때만) 접근이 가능함
router.get('/', function(req,res) {
  agency.find({}, function(err, agencys){
    if(err) return res.json(err);
    res.render('agency/agency', {agencys:agencys});
  });
});
router.get('/policy', function(req, res){
  agency.find({}, function(err, agencys){
    if(err) return res.json(err);
    res.render('agency/policy', {agencys:agencys});
  });
});
  
module.exports=router;