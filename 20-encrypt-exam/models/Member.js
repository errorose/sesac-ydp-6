// Member 모델 정의
const MemberModel = (sequelize, DataTypes)=>{
    // sequelize 매개변수: models/index.js에서의 sequelize (db연결 정보를 입력하여 생성한 객체)
    // DataTypes 매개변수: mpdels/index.js에서의 Sequelize (sequelize 패키지 객체)

    const Member = sequelize.define(
        // param1: 모델 이름 설정
        'Member',
        // param2: 모델 컬럼 정의
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            pw:{
                type: DataTypes.STRING(511),
                allowNull: false,
            },
            name:{
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            userid:{
                type: DataTypes.STRING(15),
                allowNull: false,
            },
        },
        // param3: 모델 옵션 정의 
        {
            freezeTableName: true, // 테이블 명 고정
            timestamps: false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
        }
    );
    return Member;
}

module.exports = MemberModel;