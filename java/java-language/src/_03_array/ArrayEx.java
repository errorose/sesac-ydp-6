package _03_array;

import java.util.Arrays;

// 배열
// - 배열에 저장할 자료형 선언 -> 배열 이름과 크기도 선언
// - 배열의 원소는 모두 같은 타입
// - 처음 선언한 배열 크기는 변경 불가능
public class ArrayEx {
    public static void main(String[] args) {
        // 배열 변수 선언
        // - 두가지 방법이 있는데, 관례적으로 첫번째 방법 사용
        // 1. 타입[] 변수;
        // 2. 타입 변수[];
        int[] arr1;
        int arr2[];

        // - 배열 변수: "참조 변수" (배열도 객체다!)
        // 배열 변수는 힙 영역의 배열 주소를 저장한다. 따라서 참조할 배열이 없다면 null 로 초기화 가능
        // ex) 타입[] 변수 = null;
        String[] temp = null;
        System.out.println("temp = " + temp); // temp = null

        // - "값 목록"으로 배열 변수 선언과 생성
        // : 중괄호({})는 나열된 값들을 항목으로 가지는 배열을 힙에 생성하고, "번지"를 리턴
        // 즉, 배열 변수를 "리턴된 번지"를 저장함으로써 참조가 이루어짐
        int[] intArray = {16, 22, 34, 41, 59};
        System.out.println("intArray[0] = " + intArray[0]); // 16
        System.out.println("intArray[1] = " + intArray[1]); // 22
        System.out.println("intArray[2] = " + intArray[2]); // 34
        System.out.println("intArray = " + intArray); // 참조값 [I@28a418fc

        intArray[1] = 77; // 인덱스 1번 원소 값을 변경
        System.out.println("intArray[1] = " + intArray[1]);

        // - "new 연산자"로 배열 선언과 생성
        // : new 연산자로 배열 처음 생성하면 배열 항목은 기본 값으로 초기화 됨
        double[] doubleArray = new double[3];
        System.out.println("doubleArray[0] = " + doubleArray[0]); // 0.0
        System.out.println("doubleArray[1] = " + doubleArray[1]); // 0.0
        System.out.println("doubleArray[2] = " + doubleArray[2]); // 0.0

        doubleArray[0] = 0.2;
        doubleArray[1] = 2.4;
        doubleArray[2] = 1.8;
        System.out.println("doubleArray[0] = " + doubleArray[0]); // 0.2
        System.out.println("doubleArray[1] = " + doubleArray[1]); // 2.4
        System.out.println("doubleArray[2] = " + doubleArray[2]); // 1.8

        ////////////////////////////////////////////////////////////////////////
        // 배열 길이
        // - 배열변수.length;
        // - length 필드는 읽기만 가능하므로 값 변경 없음
        System.out.println("doubleArray 배열 길이: " + doubleArray.length);
        // doubleArray.length = 5; // 컴파일 에러

        // 배열 길이는 반복문에서 자주 쓰임
        int sum = 0;
        for(int i = 0; i < intArray.length; i++){
            sum += intArray[i];
        }
        System.out.println("sum = " + sum);

        // 평균 구하기
        double avg = (double) sum / intArray.length;
        System.out.println("avg = " + avg);

        // 배열의 길이를 벗어난다면? (배열의 인덱스는 0부터 시작하니까) 에러뜸!
        // System.out.println(doubleArray[doubleArray.length]);

        ////////////////////////////////////////////////////////////////////////
        // 배열 원소 출력
        // - toString(): 배열 내용을 문자열로 변환하여 출력
        // - 배열 주소값이 아닌 배열 내부 값을 모두 보고싶을 때
        char[] charArray = {'A', 'B', 'C'};
        System.out.println("intArray: " + Arrays.toString(intArray)); // intArray: [16, 77, 34, 41, 59]
        System.out.println("doubleArray: " + Arrays.toString(doubleArray)); // doubleArray: [0.2, 2.4, 1.8]
        System.out.println("charArray: " + Arrays.toString(charArray)); // charArray: [A, B, C]

        ////////////////////////////////////////////////////////////////////////
        // 다차원 배열
        // - 배열 안에 또 다른 배열이 존재하는 배열
        // 2x3 배열
        int[][] matrix = {{1,2,3}, {4,5,6}};
        System.out.println("matrix: ");
        for(int i = 0; i < matrix.length; i++){
            for(int j = 0; j < matrix[i].length; j++){
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        // 3x2 배열
        int[][] matrix2 = new int[3][2];
        matrix2[0][0] = 1;
        matrix2[0][1] = 2;
        matrix2[1][0] = 3;
        matrix2[1][1] = 4;
        matrix2[2][0] = 5;
        matrix2[2][1] = 6;
        System.out.println("\nmatrix2: ");
        for(int i = 0; i < matrix2.length; i++){
            for(int j = 0; j < matrix2[i].length; j++){
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }

        // 3차원 배열
        int[][][] threeDimensionalArray = {{{1,2,}, {3,4}}, {{5,6}, {7,8}}};
        System.out.println("\nmatrix3: ");
        for(int i = 0; i < threeDimensionalArray.length; i++){
            for(int j = 0; j < threeDimensionalArray[i].length; j++){
                for(int k = 0; k < threeDimensionalArray[i][j].length; k++){
                    System.out.print(threeDimensionalArray[i][j][k] + " ");
                }
            }
            System.out.println();
        }

        System.out.println();

        ////////////////////////////////////////////////////////////////////////
        // 객체를 참조하는 배열
        // - 기본 타입 배열은 각 항목에 값을 직접 저장
        // - 참조타입 (클래스, 인터페이스) 배열은 각 항목에 객체의 번지를 저장
        String[] langs = new String[3];
        langs[0] = "Java";
        langs[1] = "Java";
        langs[2] = new String("Java");

        System.out.println("Arrays.toString(langs) = " + Arrays.toString(langs));
        System.out.println(langs[0]==langs[1]); // true (같은 객체 참조)
        System.out.println(langs[1]==langs[2]); // false (다른 객체 참조)
        System.out.println(langs[0].equals(langs[2])); // true (참조값은 다르지만 equals 로 비교 : 내용이 같으므로)

        System.out.println();

        ////////////////////////////////////////////////////////////////////////
        // 배열 복사
        // - 배열은 크기가 고정되어 있음
        // -> 더 많은 저장공간이 필요해지면 더 큰 길이의 배열을 새로 만들어서 기존 배열 복사해야 함

        // ver1. 반복문으로 요소 하나씩 복사
        int[] originArray = {1, 2, 3};
        int[] newArray = new int[5];
        System.out.println(Arrays.toString(originArray)); // 기존 배열 출력

        for (int i = 0; i < originArray.length; i++) {
            newArray[i] = originArray[i];
        }
        System.out.println(Arrays.toString(newArray)); // 복사한 새 배열 출력

        // ver2. arraycopy() 사용
        // : System.arraycopy(Object src, int srcPos, Object dest, int destPos, int length);
        // - Ojbect src: 원본 배열
        // - int srcPos: 원본 배열 복사 시작 인덱스
        // - Object dest: 새 배열
        // - int destPos: 새 배열 붙여넣기 시작 인덱스
        // - int length: 복사 항목 수
        String[] originFruits = {"apple", "banana", "kiwi"};
        String[] newFruits = new String[5];
        // 복제 전
        System.out.println("Arrays.toString(originFruits) = " + Arrays.toString(originFruits));
        System.out.println("Arrays.toString(newFruits) = " + Arrays.toString(newFruits));
        // 복제 후
//        System.arraycopy(originFruits, 0, newFruits, 1, originFruits.length - 1);
//        System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length);
        System.arraycopy(originFruits, 1, newFruits, 0, originFruits.length -1);
        System.out.println("Arrays.toString(originFruits) = " + Arrays.toString(originFruits));
        System.out.println("Arrays.toString(newFruits) = " + Arrays.toString(newFruits));
        System.out.println();

        ////////////////////////////////////////////////////////////////////////
        // Arrays 메소드
        // copyOf(arr, copyArrLength): 배열 전체를 복사해 복사할 길이 만큼 지정하여 새로운 배열 반환
        int[] originalArray = {1, 2, 3, 4, 5};
        int[] copiedArray = Arrays.copyOf(originalArray, 3);
        System.out.println("originalArray = " + Arrays.toString(originalArray));
        System.out.println("copiedArray = " + Arrays.toString(copiedArray));
        System.out.println();

        // copyOfRange(arr, sIdx, eIdx): 배열 시작 인덱스와 끝 인덱스를 지정하여 복사한 새로운 배열 반환
        int[] rangeArray = Arrays.copyOfRange(originalArray, 1, 4);
        System.out.println("rangeArray = " + Arrays.toString(rangeArray));
        System.out.println();

        // fill(arr, n): 배열의 모든 요소를 동일한 값으로 채워주는 함수
        int[] filledArray = new int[5];
        System.out.println("(before) filledArray = " + Arrays.toString(filledArray));
        Arrays.fill(filledArray, 7);
        System.out.println("(after) filledArray = " + Arrays.toString(filledArray));
        System.out.println();

        // sort(arr): 배열 내 요소들을 오름차순 정렬 반환
        int[] unsortedArray = {5, 8, 3, 1, 6};
        Arrays.sort(unsortedArray);
        System.out.println("unsortedArray = " + Arrays.toString(unsortedArray));
        System.out.println();

        // equals(arr1, arr2): 두 배열ㄹ의 내용이 동일한지 확인
        // (요소의 값과 순서가 모두 같아야만 true 반환, 하나라도 다르면 false)
        int[] array1 = {1, 2, 3};
        int[] array2 = {1, 2, 3};
        int[] array3 = {4, 2, 3};
        System.out.println("array1 vs. array2: " + Arrays.equals(array1, array2)); // t
        System.out.println("array1 vs. array3: " + Arrays.equals(array1, array3)); // f

        // Java 에서 배열을 선언하고 초기화할 때마다 "새로운 객체가 힙 영역에 생성됨"
        // => 그래서, array1 과 array2 는 다른 참조를 갖는다!!!
        // => 두 배열의 내용이 같더라도, 각각 독립적으로 메모리에 할당
        System.out.println("array1 == array2: " + (array1 == array2)); // f
        System.out.println("array1 == array3: " + (array1 == array3)); // f

        // 참고. 같은 메모리 주소를 가르키게 하고 싶다면?
        int[] array11 = array1;
        System.out.println("array1 == array11: " + (array1 == array11)); // t
        System.out.println();

        // deepEquals(arr1, arr2): 단일차원/다차원 두 배열이 같은지 비교
        int[][] deepArray1 = {{1, 2}, {3, 4}};
        int[][] deepArray2 = {{1, 2}, {3, 4}};
        int[][] deepArray3 = {{1, 2}, {3, 5}};
        System.out.println("deepArray1 vs. deepArray2 :  " + Arrays.deepEquals(deepArray1, deepArray2)); // t
        System.out.println("deepArray1 vs. deepArray3 :  " + Arrays.deepEquals(deepArray1, deepArray3)); // f
        System.out.println();

        // binarySearch(arr, val): 배열의 특정 인덱스 요소 값을 이진 검색 알고리즘을 사용하여 검색한 후 해당 위치 반환
        // 단, 배열은 정렬된 상태여야 함
        int[] sortedArray = {10, 40, 50, 60, 70};
        int idx = Arrays.binarySearch(sortedArray, 50);
        System.out.println("Index of 50: " + idx);
    }
}

/*
Data Type

1. Primitive Type
1.1 정수 타입: byte, char, short, int, long
1.2 실수 타입: float, double
1.3 논리 타입: boolean
int grade = 1;
double score = 9.4;

2. Reference Type
: 객체 (object: 필드와 메서드로 구성된 덩어리) 의 번지를 참조하는 타입
2.1 배열 타입
2.2 열거 타입
2.3 클래스
2.4 인터페이스
String name = "코딩온";
String addr = "서울";

---
Stack & Heap
Stack 영역
- 변수는 모두 스택 영역에 생성됨
- primitive type 직접 값을 저장, reference type 은 힙 메모리 영역의 객체 번지수를 저장해서 번지수를 통해 객체를 참조
Heap 영역
- 참조 타입 변수가 힙 메모리 영역에 객체 저장
*/