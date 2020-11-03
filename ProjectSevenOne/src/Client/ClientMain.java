package Client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class ClientMain {
    public static int port = 4500;
    private static int count = 0;

    public static void main(String[] args) {
        try {
            Socket socket = new Socket("127.0.0.1", port);
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter printWriter = new PrintWriter(socket.getOutputStream(), true);
            printWriter.println("客户端连接成功");

            Scanner scanner = new Scanner(System.in);
            String clientInput, clientOutput;
            do {
                clientInput = bufferedReader.readLine();
                System.out.println("接收到服务端消息：");
                System.out.println(clientInput);
                if (clientInput.equals("PassWord Wrong!") && count < 1) {
                    count++;
                    System.out.println("向服务端发送消息: ");
                    clientOutput = scanner.nextLine();
                    printWriter.println(clientOutput);
                }
                else if (clientInput.equals("Illegal User!") && count == 1) {
                    System.out.println("Server close");
                    bufferedReader.close();
                    printWriter.close();
                    socket.close();
                }
                else if (clientInput.equals("Registration Successful")) {
                    count = 0;
                    System.out.println("向服务端发送消息: ");
                    clientOutput = scanner.nextLine();
                    printWriter.println(clientOutput);
                } else {
                    System.out.println("向服务端发送消息: ");
                    clientOutput = scanner.nextLine();
                    printWriter.println(clientOutput);
                }
            } while (count <= 2);
        }catch (IOException e) {

        }
    }
}