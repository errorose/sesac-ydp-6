// 선수와 관련된 컨트롤러 모음

const {Player, Profile} = require('../models/index');

exports.getPlayers = async (req, res)=>{
    try{
        const players = await Player.findAll(); // Player.findAll() 끝날때까지 기다렸다가 players에 담는다.
        res.json(players); // players에 담은걸 보낸다.
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getPlayer = async (req, res)=>{
    try{
        console.log(req.params.player_id);
        const {player_id} = req.params;

        // select * from player where player_id = 1
        const player = await Player.findOne({
            where: {player_id}, // {player_id: player_id}
            include: [
                {
                    model: Profile,
                    attributes: ['position', 'salary']
                }
            ] // join
        });

        res.json(player);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.postPlayer = async (req, res)=>{
    try{
        console.log(req.body);
        const {name, age, team_id} = req.body;
        const newPlayer = await Player.create({
            name, age, team_id // {name: name}, {age: age}, {team_id: team_id}
        });

        res.json(newPlayer);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.patchPlayer = async (req, res)=>{
    try{
        const {player_id} = req.params;
        const {team_id} = req.body;

        // UPDATE `Player` SET `team_id`=?,`updatedAt`=? WHERE `player_id` = ?
        const updatedPlayer = await Player.update(
            // 무엇을 바꾸는데?
            {team_id},
            // 누구를 바꾸는데?
            {where: {player_id}}
        );

        res.json(updatedPlayer);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.params;

        // DELETE FROM `Player` WHERE `player_id` = '1'
        const isDeleted = await Player.destroy({
            where: { player_id }
        });
        console.log(isDeleted); // 1, 0

        if (isDeleted) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    }  catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}