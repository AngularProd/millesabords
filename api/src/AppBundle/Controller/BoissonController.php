<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Boissonr4;
use AppBundle\Form\Boissonr4Type;

class BoissonController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/boisson")
     */
    public function getBoissonAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boissonr4')
                ->findAll();

        return $Boisson;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/boisson")
     */
    public function postBoissonAction(Request $request) {
        $Boissonr4 = new Boissonr4();
        $form = $this->createForm(Boissonr4Type::class, $Boissonr4);

        $form->submit($request->request->all());

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Boissonr4);
            $em->flush();
            return $Boissonr4;
        } else {
            return $form;
        }
    }    

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/boisson/{id}")
     */
    public function removeBoissontAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Boissonr4 = $em->getRepository('AppBundle:Boissonr4')
                    ->find($request->get('id'));

        if ($Boissonr4) {
            $em->remove($Boissonr4);
            $em->flush();
        }
    }

     /**
     * @Rest\View()
     * @Rest\Put("/boisson/{id}")
     */
    public function updateBoissonAction(Request $request) {
        $Boissonr4 = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boissonr4')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire

        if (empty($Boissonr4)) {
            return new JsonResponse(
                ['message' => 'Boisson non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }
       $form = $this->createForm(Boissonr4Type::class, $Boissonr4);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Boissonr4);
            $em->flush();
            return $Boissonr4;
        } else {
            return $form;
        }
    }   

}