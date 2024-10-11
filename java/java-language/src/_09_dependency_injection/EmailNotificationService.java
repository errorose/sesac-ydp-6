package _09_dependency_injection;

public class EmailNotificationService implements INotificationService {
    public void send() {
        System.out.println("Sending email notification: Your order has been processed");
    }
}
