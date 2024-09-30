package _07_generic;

import java.util.ArrayList;

// 일반 클래스
class CustomList {
    ArrayList<String> list = new ArrayList<>();

    public void addElement(String element) { list.add(element); }
    public void removeElement(String element) { list.remove(element); }
    public String get(int i) { return list.get(i); }

    @Override
    public String toString() { return "CustomList = " + list; }
}

// 제네릭 클래스
class CustomListGeneric<T> {
    ArrayList<T> list = new ArrayList<>();

    public void addElement(T element) { list.add(element); }
    public void removeElement(T element) { list.remove(element); }
    public T get(int i) { return list.get(i); }

    @Override
    public String toString() { return "CustomListGeneric = " + list; }
}

public class GenericEx {
    public static void main(String[] args) {
        // generic x
        CustomList li = new CustomList();
        li.addElement("first");
        li.addElement("second");
        li.addElement("third");
        System.out.println(li.toString());

        li.removeElement("second");
        System.out.println(li.toString());

        System.out.println(li.get(1));
        System.out.println();

        // generic o
        // int x, Integer o
        // case1.
        CustomListGeneric<Integer> gli = new CustomListGeneric<>();
        gli.addElement(3);
        gli.addElement(6);
        gli.addElement(9);
        System.out.println(gli.toString());

        gli.removeElement(6);
        System.out.println(gli.toString());

        System.out.println(gli.get(1));
        System.out.println();

        // case2.
        CustomListGeneric<Character> gli2 = new CustomListGeneric<>();
        gli2.addElement('A');
        gli2.addElement('B');
        gli2.addElement('C');
        System.out.println(gli2.toString());

        gli2.removeElement('B');
        System.out.println(gli2.toString());

        System.out.println(gli2.get(0));
        System.out.println();
    }
}