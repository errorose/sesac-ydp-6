package _05_class._interface._exam._01;

class Mp3Player implements Music {
    String music;

    @Override
    public void play(String music) {
        System.out.println("MP3 플레이어에서 " + music + " 음악을 재생합니다.");
    }

    @Override
    public void stop(String music) {
        System.out.println("MP3 플레이어에서 " + music + " 음악을 정지힙니다.");
    }
}

class CdPlayer implements Music {
    String music;

    @Override
    public void play(String music) {
        System.out.println("CD 플레이어에서 " + music + " 앨범을 재생합니다.");
    }

    @Override
    public void stop(String music) {
        System.out.println("CD 플레이어에서 " + music + " 앨범을 정지힙니다.");
    }
}

public class MusicPlayer {
    public static void main(String[] args) {
        Mp3Player mp3 = new Mp3Player();
        CdPlayer cd = new CdPlayer();

        System.out.println("=== MP3 Player ===");
        mp3.play("'아이유 블루밍'");
        mp3.stop("'아이유 블루밍'");

        System.out.println();

        System.out.println("=== CD Player ===");
        cd.play("'아이유 꽃갈피'");
        cd.stop("'아이유 꽃갈피'");
    }
}

