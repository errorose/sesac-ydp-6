const { Team, Player } = require('../models/index');
const { Op } = require('sequelize');

// 전체 팀 조회, 전체 팀 조회 + 이름 순 정렬, 팀 이름 검색
exports.getTeams = async (req, res) => {
    try {
        const { sort, search } = req.query; 
        console.log(req.query); // { sort: 'name_asc' }, { search: 'KT' }

        let teams;

        if (sort === 'name_asc') {
            // 이름 기준 오름차순 
            // SELECT `team_id`, `name` FROM `Team` AS `Team` ORDER BY `Team`.`name` ASC;
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order: [['name', 'ASC']]
            });
        } else if (search) {
            // SELECT `team_id`, `name` FROM `Team` AS `Team` WHERE `Team`.`name` LIKE '%KT%';
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                where: {
                    name: { [Op.like]: `%${search}%`}
                }
            })
        } else {
            // 전체 조회 
            // SELECT `team_id`, `name` FROM `Team` AS `Team`;
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
            });
        }

        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// 특정 팀 조회
exports.getTeam = async (req, res)=>{
    try{
        console.log(req.params);
        const {team_id} = req.params;
        const team = await Team.findOne({
            where: {team_id}
        });

        res.json(team);
        
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// 특정 팀의 모든 선수 조회
exports.getTeamPlayers = async (req, res)=>{
    try{
        console.log(req.params);
        const {team_id} = req.params;
        const team = await Team.findOne({
            where: {team_id},
            include: [{model: Player}]
        });

        res.json(team);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}