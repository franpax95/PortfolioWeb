<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Mail;

class MailController extends Controller
{
    public function index(Request $request) {
        \Mail::send('mail', array(
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'body' => $request->get('message'),
        ), function($message) use ($request){
            $message->from($request->email);
            $message->to('fcojnavarrowork@gmail.com', 'Francisco Javier')->subject('Mensaje desde portfolio');
        });
    }
}
