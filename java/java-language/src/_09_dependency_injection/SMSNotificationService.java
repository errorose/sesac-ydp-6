package _09_dependency_injection;

public class SMSNotificationService implements INotificationService {
    public void send() {
        System.out.println("Sending SMS notification: Your order has been processed");
    }
}
