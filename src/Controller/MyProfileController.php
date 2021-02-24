<?php

namespace App\Controller;

use App\Entity\Projet;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyProfileController extends AbstractController
{
    /**
     * @Route("/comptePersoDuMonk", name="my_account")
     */
    public function index(): Response
    {
        $userAdmin = $this->getDoctrine()
            ->getRepository(Projet::class)
            ->findBy(['owner' =>$this->getUser()]);

        return $this->render('security/MyAccount.html.twig', [
                'userAdmin' => $userAdmin            ]
        );
    }

    /**
     * @Route("/admin{id}", name="show_admin", methods={"GET"})
     */
    public function showAdmin(Projet $projet): Response
    {
        return $this->render('projet/show-admin.html.twig', [
            'projet' => $projet,
        ]);
    }

}