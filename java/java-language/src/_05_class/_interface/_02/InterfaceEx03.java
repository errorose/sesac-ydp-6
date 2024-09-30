package _05_class._interface._02;

// 전화 기능을 위한 인터페이스
interface Phone {
    void makeCall(String number);
    void answerCall();
}

// 인터넷 기능을 위한 인터페이스
interface InternetDevice {
    void browseWeb(String url);
    void sendEmail(String address, String content);
}

// 카메라 기능을 위한 인터페이스
interface Camera {
    void takePhoto();
    void recordVideo();
}

// 다중 인터페이스 구현
// - 구현 객체는 여러 개의 인터페이스를 implements 할 수 있음
class SmartPhone implements Phone, InternetDevice, Camera {
    @Override
    public void takePhoto() { System.out.println("사진을 촬영합니다."); }

    @Override
    public void recordVideo() { System.out.println("동영상을 촬영합니다."); }

    @Override
    public void browseWeb(String url) { System.out.println(url + "에 접속합니다."); }

    @Override
    public void sendEmail(String address, String content) { System.out.println(address + "로 이메일을 보냅니다: " + content); }

    @Override
    public void makeCall(String number) { System.out.println(number + "로 전화를 겁니다."); }

    @Override
    public void answerCall() { System.out.println("전화를 받습니다."); }
}


public class InterfaceEx03 {
    public static void main(String[] args) {
        SmartPhone sp = new SmartPhone();

        sp.makeCall("010-1234-5678");
        sp.answerCall();

        sp.browseWeb("www.example.com");
        sp.sendEmail("test@example.com", "하이!");

        sp.takePhoto();
        sp.recordVideo();
    }
}