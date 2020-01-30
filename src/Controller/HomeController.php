<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        $user = $this->getUser();
        $username = '';
        if ($user) {
            $username = $user->getUsername();
        } else {
            return $this->redirectToRoute('login');
        }
        return $this->render('pages/index.html.twig', [
            'username' => $username,
        ]);
    }
}
