<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use AppBundle\Entity\Utilisateurs;
use AppBundle\Form\UtilisateursType;


class UtilisateurController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/utilisateurs")
     */
    public function getUtilisateursAction(Request $request) {
        $Utilisateurs = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Utilisateurs')
                ->findAll();

        return $Utilisateurs;
    }

    /**
     * @Rest\View()
     * @Rest\Get("/utilisateur/{pseudo}")
     */
    public function getUtilisateurAction(Request $request) {
        $utilisateur = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Utilisateurs')
                ->findOneByPseudo( $request->get('pseudo') );
        /* @var $utilisateur */

        if (empty($utilisateur)) {
            return new JsonResponse(['message' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        return $utilisateur;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/utilisateur")
     */
    public function postUtilisateurAction(Request $request) {
        $Utilisateur = new Utilisateurs();
        $form = $this->createForm(UtilisateursType::class, $Utilisateur);

        $form->submit($request->request->all());

        if ($form->isValid()) {
	        $password = sha1($Utilisateur->getPassword());
	        $Utilisateur->setPassword($password);       	
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Utilisateur);
            $em->flush();
            return $Utilisateur;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/utilisateur/{id}")
     */
    public function removeUtilisateurAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $utilisateur = $em->getRepository('AppBundle:Utilisateurs')
                    ->find($request->get('id'));

        if ($utilisateur) {
            $em->remove($utilisateur);
            $em->flush();
        }
    }    

}