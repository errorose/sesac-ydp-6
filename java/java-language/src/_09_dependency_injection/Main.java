package _09_dependency_injection;

public class Main {
    public static void main(String[] args) {
//        INotificationService serviceEmail = new EmailNotificationService();
        INotificationService serviceSMS = new SMSNotificationService();

        // 생성자 주입 방식
//        OrderService service = new OrderService(serviceEmail);

        // setter 주입 방식
        OrderService service = new OrderService();
        service.setINotificationService(serviceSMS);

        service.send();
    }
}
