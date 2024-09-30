package _05_class._interface._exam._02;

import java.util.ArrayList;

public class VehicleEx {
    public static void main(String[] args) {
        ArrayList<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(new Car());
        vehicles.add(new Airplane());

        for(Vehicle v : vehicles) {
            v.move();
            if(v instanceof Airplane) {
                ((Airplane) v).fly();
            }
        }
    }
}
