<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Platdujour4;

class PlatdujourController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/platdujour")
     */
    public function getplatdujourAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Platdujour4')
                ->findAll();

        return $Boisson;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/platdujour")
     */
    public function postplatdujourAction(Request $request) {
        $values = $request->request->all();
        foreach ($values as $key => $value) {
            if (!$value)
                return false;
        }
        $data = new Platdujour4();
        $data->setNom($values['nom']);
        $data->setPrix($values['prix']);
        $data->setIngredient($values['ingredient']);

        $entity_manager = $this->getDoctrine()->getManager();
        $entity_manager->persist($data);
        $save = $entity_manager->flush();

        return $save ? [$values, gettype($values)]: false;
    }    

     /**
     * @Rest\View()
     * @Rest\Get("/platdujour/delete/{id}")
     */
    public function removeplatdujourAction(Request $request, $id) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Platdujour = $em->getRepository('AppBundle:Platdujour4')
                    ->find($request->get('id'));

        if ($Platdujour) {
            $em->remove($Platdujour);
            $delete = $em->flush();
            return $delete;
        }
        return false;
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/platdujour/update/{id}")
     */
    public function updateplatdujourAction(Request $request) {
        $entity_manager = $this->getDoctrine()->getManager();
        $product = $entity_manager->getRepository(Platdujour4::class)->find($request->get('id'));

        if (!$product)
            return new JsonResponse(
                ['message' => 'Platdujour non trouvé'], 
                Response::HTTP_NOT_FOUND
            );

        $values = $request->request->all();
        foreach ($values as $key => $value) {
            if (!$value)
                return false;
        }
        $product->setNom($values['nom']);
        $product->setPrix($values['prix']);
        $product->setIngredient($values['ingredient']);

        $update = $entity_manager->flush();

        return ($update) ? $values : false;
    }
}