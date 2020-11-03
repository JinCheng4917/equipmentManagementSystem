package Server;

import Client.ClientMain;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class ServerMain {
    private static int count = 0;
    private static boolean verify = false;
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(ClientMain.port);
            System.out.println("等待客户端连接");
            Socket socket = serverSocket.accept();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter printWriter = new PrintWriter(socket.getOutputStream(), true);
            printWriter.println("Verifying Server!");

            Scanner scanner = new Scanner(System.in);
            String serverInput, serverOutput;
            do {
                serverInput = bufferedReader.readLine();
                System.out.println("接收到客户端端消息：");
                System.out.println(serverInput);
                if (!serverInput.equals("client") && !serverInput.equals("客户端连接成功") && count <= 1 && verify == false){
                    System.out.println("客户端验证失败");
                    count++;
                    printWriter.println("PassWord Wrong!");
                }
                else if (serverInput.equals("client") && !serverInput.equals("客户端连接成功") && count <= 2 && verify == false) {
                    System.out.println("客户端验证成功");
                    printWriter.println(" Registration Successful!");
                    count = 0;
                    verify = true;
                }
                else if (!serverInput.equals("client") && !serverInput.equals("客户端连接成功") && count == 2 && verify == false) {
                    printWriter.println("Illegal User!");
                    System.out.println("客户端验证失败, 服务端关闭");
                    bufferedReader.close();
                    printWriter.close();
                    socket.close();
                    serverSocket.close();
                } else if(!serverInput.equals("客户端连接成功") && verify ==true) {
                    System.out.println("向客户端发送消息: ");
                    serverOutput = scanner.nextLine();
                    printWriter.println(serverOutput);
                }
            } while (count<=2);
        }catch (IOException e) {

        }
    }
}
