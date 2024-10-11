package _09_dependency_injection;

public class OrderService {
    // 생성자 주입 방식
//    private final INotificationService service;
//
//    public OrderService(INotificationService service) {
//        this.service = service;
//    }

    // setter 주입 방식
    private INotificationService service;

    public void setINotificationService(INotificationService service) {
        this.service = service;
    }

    public void send() {
        service.send();
    }
}
